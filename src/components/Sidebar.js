import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const isOpen = true;

  return (
    <SidebarContainer>
      <aside className={`sidebar ${isOpen && 'show-sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" className="logo" />
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => <li key={id}><Link to={url}>{text}</Link></li>)}
          <li><Link to="/checkout">checkout</Link></li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer >
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    margin-top: 0.2rem;
    font-size: 2rem;
    color: var(--clr-red-dark);
    border-color: transparent;
    background: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .logo {
    justify-self: center;
    height: 45px;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    color: var(--clr-grey-3);
    text-align: left;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }

  .links a:hover {
    padding: 1rem 1.5rem 1rem 2rem;
    color: var(--clr-grey-2);
    background: var(--clr-grey-10);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transform: translate(-100%);
    transition: var(--transition);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;