import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">home</Link> / {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--clr-primary-1);
  min-height: 20vh;
  background: var(--clr-primary-10);

  a {
    padding: 0.5rem;
    color: var(--clr-primary-3);
    transition: var(--transition);
  }

  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;