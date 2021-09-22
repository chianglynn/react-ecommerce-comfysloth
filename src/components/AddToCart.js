import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const decrease = () => setAmount(amount === 1 ? 1 : amount - 1);
  
  const increase = () => setAmount(amount === stock ? stock : amount + 1);

  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {colors.map((color, index) => <button className={`color-btn ${mainColor === color && 'active'}`} style={{ backgroundColor: color }} key={index} onClick={() => setMainColor(color)}>
            {mainColor === color && <FaCheck />}
          </button>)}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons amount={amount} decrease={decrease} increase={increase} />
        <Link to="/cart" className="btn" onClick={() => addToCart(id, mainColor, amount, product)}>add to cart</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;

  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;

    span {
      font-weight: 700;
      text-transform: capitalize;
    }

    div {
      display: flex;
    }
  }

  .color-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    background-color: #222;
    opacity: .5;
    cursor: pointer;

    svg {
      font-size: .75rem;
      color: var(--clr-white);
    }
  }

  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;