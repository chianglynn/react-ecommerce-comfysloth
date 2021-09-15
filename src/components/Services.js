import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture<br />
            built only for you
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in ullam molestias dolore non id error a laborum ipsa libero.</p>
        </article>
      </div><div className="services-center">
        {services.map(({ id, icon, title, text }) => {
          return (
            <article className="service" key={id}>
              <span className="icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--clr-primary-10);

  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  .header h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0;
    color: var(--clr-primary-3);
    line-height: 1.8;
  }

  .services-center {
    display: grid;
    gap: 2.5rem;
    margin-top: 4rem;
  }

  .service {
    padding: 2.5rem 2rem;
    text-align: center;
    border-radius: var(--radius);
    background: var(--clr-primary-7);

    p {
      color: var(--clr-primary-2);
    }
  }

  span {
    display: grid;
    place-items: center;
    margin: 0 auto 1rem;
    width: 4rem;
    height: 4rem;
    color: var(--clr-primary-1);
    border-radius: 50%;
    background: var(--clr-primary-10);

    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  @media (min-width: 1280px) {
    padding: 0;

    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;