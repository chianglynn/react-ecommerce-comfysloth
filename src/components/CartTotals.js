import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  return <h4>cart totals</h4>;
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  article {
    padding: 1.5rem 3rem;
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  p {
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  .btn {
    margin-top: 1rem;
    width: 100%;
    font-weight: 700;
    text-align: center;
  }
`;

export default CartTotals;