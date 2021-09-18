import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, decrease, increase }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}><FaMinus /></button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}><FaPlus /></button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  width: 140px;

  h2 {
    margin-bottom: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    border-color: transparent;
    background: transparent;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;