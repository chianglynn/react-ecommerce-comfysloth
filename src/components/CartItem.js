import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaTrash } from 'react-icons/fa';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, name, color, amount, image, price, max }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const decrease = () => toggleAmount(id, 'decrease');
  const increase = () => toggleAmount(id, 'increase');

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">color : <span style={{ backgroundColor: color }}></span></p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} decrease={decrease} increase={increase} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button type="button" className="remove-btn" onClick={() => removeItem(id)}><FaTrash /></button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 200px auto auto;
    grid-template-rows: 75px;
    gap: 3rem 1rem;
    justify-items: center;
    align-items: center;
    margin-bottom: 3rem;

  .subtotal {
    display: none;
  }

  .price {
    display: none;
  }

  .title {
    display: grid;
    grid-template-rows: 75px;
    grid-template-columns: 75px 125px;
    gap: 1rem;
    align-items: center;
    text-align: left;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h5 {
    margin-bottom: 0;
    font-size: .75rem;
  }

  .color {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    font-size: .75rem;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    text-transform: capitalize;

    span {
      display: inline-block;
      margin-left: .5rem;
      width: .5rem;
      height: .5rem;
      border-radius: var(--radius);
      background-color: red;
    }
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  .amount-btns {
    width: 75px;

    button {
      width: 1rem;
      height: .5rem;
      font-size: .75rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .remove-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: .75rem;
    color: var(--clr-white);
    background-color: transparent;
    letter-spacing: var(--spacing);
    border: transparent;
    border-radius: var(--radius);
    background-color: var(--clr-red-dark);
    cursor: pointer;
  }

  @media (min-width: 776px) {
    grid-template-rows: 75px;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;

    .subtotal {
      display: block;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-grey-5);
    }

    .price-small {
      display: none;
    }

    .price {
      display: block;
      font-size: 1rem;
      font-weight: 400;
      color: var(--clr-primary-5);
    }

    .name {
      font-size: .85rem;
    }

    .color {
      font-size: .85rem;

      span {
        width: .75rem;
        height: .75rem;
      }
    }

    img {
      height: 100%;
    }

    .title {
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      height: 100%;
      text-align: left;
    }

    .amount-btns {
      width: 100px;

      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;