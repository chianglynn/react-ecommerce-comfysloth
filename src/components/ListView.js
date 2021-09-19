import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => {
        const { id, name, price, image, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">details</Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
    width: 300px;
    height: 200px;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h4 {
    margin-bottom: .5rem;
  }

  .price {
    margin-bottom: .75rem;
    color: var(--clr-primary-6);
  }
  p {
    margin-bottom: 1rem;
    max-width: 45em;
  }

  .btn {
    padding: .25rem .5rem;
    font-size: .5rem;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;