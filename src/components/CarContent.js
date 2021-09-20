import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map(item => <CartItem key={item.id} {...item} />)}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">continue shopping</Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>clear shopping cart</button>
      </div>
      <CartTotals />
    </Wrapper>
  );
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
    background-color: var(--clr-primary-5);
    cursor: pointer;
  }
  
  .clear-btn {
    background-color: var(--clr-black);
  }
`;

export default CartContent;