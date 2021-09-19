import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil repellendus amet assumenda sint eaque tempora ipsum nulla iusto quod.</p>
          <form className="contact-form">
            <input type="email" placeholder="enter email" className="form-input" />
            <button type="submit" className="submit-btn">subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: none;
  }

  p {
    max-width: 45em;
    color: var(--clr-grey-5);
    line-height: 2;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 90vw;
    max-width: 500px;
  }

  .form-input,
  .submit-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 2px solid var(--clr-black);
  }

  .form-input {
    color: var(--clr-grey-3);
    border-right: none;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }

  .submit-btn {
    color: var(--clr-black);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background-color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
  }

  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;