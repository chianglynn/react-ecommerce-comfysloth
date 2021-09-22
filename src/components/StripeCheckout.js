import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useHistory } from 'react-router-dom';

// // Stripe - Sample integration: https://stripe.com/docs/payments/integration-builder
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const history = useHistory();
  // Stripe
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',
        JSON.stringify({ cart, total_amount, shipping_fee }));
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent()
    // eslint-disable-next-line
  }, []);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      setTimeout(() => {
        clearCart();
        history.push('/');
      }, 10000);
    }
  };

  return (
    <div>
      {succeeded ?
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article> :
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>}

      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button id="submit" disabled={processing || disabled || succeeded}>
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>

        {/* Show any error that happens when processing the payment */}
        {error && <div className="card-error" role="alert">{error}</div>}

        {/* Show a success message upon completion */}
        <p className={`result-message ${!succeeded && "hidden"}`}>Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>{" "}Stripe dashboard. </a>
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    align-self: center;
    padding: 40px;
    width: 30vw;
    border-radius: 7px;
    box-shadow: 
      0px 0px 0px .5px rgba(50, 50, 93, .1),
      0px 2px 5px 0px rgba(50, 50, 93, .1),
      0px 1px 1.5px 0px rgba(0, 0, 0, .07);
  }

  input {
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 6px;
    width: 100%;
    max-height: 44px;
    font-size: 16px;
    border: 1px solid rgba(50, 50, 93, .1);
    border-radius: 6px;
    background-color: white;
  }

  .result-message {
    font-size: 16px;
    line-height: 22px;
  }

  .result-message a {
    font-weight: 600;
    color: rgb(89, 111, 214);
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  #card-error {
    margin-top: 12px;
    font-size: 16px;
    color: rgb(105, 115, 134);
    text-align: center;
    line-height: 20px;
  }

  #card-element {
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    max-height: 44px;
    border: 1px solid rgba(50, 50, 93, .1);
    border-radius: 4px 4px 0 0;
    background-color: white;
  }

  #payment-request-button {
    margin-bottom: 32px;
  }

  /* Buttons and links */
  button {
    display: block;
    padding: 12px 16px;
    width: 100%;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    border: 0;
    border-radius: 0 0 4px 4px;
    background-color: #5469d4;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, .07);
    transition: all .2s ease;
    cursor: pointer;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: .5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    position: relative;
    margin: 0px auto;
    width: 20px;
    height: 20px;
    font-size: 22px;
    color: #ffffff;
    text-indent: -99999px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }

  .spinner:before {
    top: -.2px;
    left: -.2px;
    width: 10.4px;
    height: 20.4px;
    border-radius: 20.4px 0 0 20.4px;
    background-color: #5469d4;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    top: -.1px;
    left: 10.2px;
    width: 10.4px;
    height: 10.2px;
    border-radius: 0 10.2px 10.2px 0;
    background-color: #5469d4;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

export default StripeCheckout;