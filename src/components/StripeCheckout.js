import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useHistory } from 'react-router-dom';

const CheckoutForm = () => {
  return <h4>hello from Stripe Checkout </h4>
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
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