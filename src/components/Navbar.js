import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(({ id, text, url }) => <li key={id}><Link to={url}>{text}</Link></li>)}
          {myUser && <li><Link to="/checkout">checkout</Link></li>}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;

  .nav-center {
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-left: -15px;
      width: 175px;
    }
  }

  .nav-toggle {
    color: var(--clr-primary-5);
    border: transparent;
    background-color: transparent;
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 .5rem;
      }

      a {
        padding: .5rem;
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);

        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;