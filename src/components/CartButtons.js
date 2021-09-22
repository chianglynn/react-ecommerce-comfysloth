import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper" onClick={closeSidebar}>
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {!myUser ?
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button> :
        <button type="button" className="auth-btn" onClick={() => {
          clearCart();
          logout({ returnTo: window.location.origin });
        }}>
          Logout <FaUserMinus />
        </button>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      margin-left: 5px;
      height: 1.6rem;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 16px;
    height: 16px;
    font-size: .75rem;
    color: var(--clr-white);
    border-radius: 50%;
    background-color: var(--clr-primary-5);
  }

  .auth-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;

    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;