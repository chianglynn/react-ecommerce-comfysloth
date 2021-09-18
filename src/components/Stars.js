import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + .5;
    return <span key={index}>{stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}</span>;
  });

  return (
    <Wrapper>
      <div className="stars">
        {/* Solution 1: manual approach for displaying stars */}
        {/* <span>{stars >= 1 ? <BsStarFill /> : stars >= .5 ? <BsStarHalf /> : <BsStar />}</span>
        <span>{stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar />}</span>
        <span>{stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar />}</span>
        <span>{stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar />}</span>
        <span>{stars === 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar />}</span> */}

        {/* Solution 2: array approach for displaying stars*/}
        {tempStars}
      </div>

      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .5rem;

  span {
    margin-right: .25rem;
    font-size: 1rem;
    color: #ffb900;
  }

  p {
    margin: 0 0 0 .5rem;
  }
`;

export default Stars;