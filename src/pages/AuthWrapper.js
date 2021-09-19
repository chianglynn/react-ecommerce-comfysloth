import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const AuthWrapper = () => {
  return <h4>AuthWrapper Component</h4>;
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export default AuthWrapper;