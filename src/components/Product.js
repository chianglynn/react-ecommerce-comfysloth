import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const Product = ({ id, name, price, image }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link"><FaSearch /></Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--radius);
    background-color: var(--clr-black);
  }

  img {
    display: block;
    width: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
    object-fit: cover;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--clr-primary-5);
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;

    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .container:hover img {
    opacity: .5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;

export default Product;