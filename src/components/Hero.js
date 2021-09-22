import React from 'react';
import styled from 'styled-components';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugit reprehenderit illo incidunt sit iusto. Inventore porro laborum iure ratione?</p>
        <Link to="/products" className="btn hero-btn">shop now</Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper >
  );
};

const Wrapper = styled.section`
  display: grid;
  min-height: 60vh;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    max-width: 45em;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: var(--clr-grey-5);
    line-height: 2;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    height: calc(100vh - 5rem);

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: .75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      position: relative;
      display: block;
    }

    .main-img {
      position: relative;
      display: block;
      width: 100%;
      height: 550px;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 250px;
      border-radius: var(--radius);
      transform: translateX(-50%);
    }

    .img-container::before {
      position: absolute;
      left: -8%;
      bottom: 0%;
      content: '';
      width: 10%;
      height: 80%;
      border-radius: var(--radius);
      background-color: var(--clr-primary-9);
    }
  }
`;

export default Hero;