import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  return <h4>cart content </h4>;
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .link-btn {
    padding: .25rem .5rem;
    font-weight: 400;
    color: var(--clr-white);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    border-color: transparent;
    border-radius: var(--radius);
    /* background-color: transparent; */
    background-color: var(--clr-primary-5);
    cursor: pointer;
  }
  
  .clear-btn {
    background-color: var(--clr-black);
  }
`;

export default CartContent;