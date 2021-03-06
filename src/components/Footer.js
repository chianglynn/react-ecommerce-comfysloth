import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </h5>
      <h5>All rights reserved.</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  text-align: center;
  background-color: var(--clr-black);

  span {
    color: var(--clr-primary-5);
  }

  h5 {
    margin: .1rem;
    font-weight: 400;
    color: var(--clr-white);
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;