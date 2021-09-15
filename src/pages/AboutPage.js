import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/hero-bcg.jpeg';
import { PageHero } from '../components';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat nihil maiores itaque iusto blanditiis nostrum ut, voluptate fuga similique esse dicta cupiditate necessitatibus quisquam odio? Quia quidem voluptatum fugit?</p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    display: block;
    width: 100%;
    height: 500px;
    border-radius: var(--radius);
    object-fit: cover;
  }

  p {
    margin: 2rem auto 0;
    max-width: 45em;
    color: var(--clr-grey-5);
    line-height: 2;
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;