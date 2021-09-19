import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { filtered_products: products, grid_view, sort, setGridView, setListView, updateSort } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={`${grid_view && 'active'}`} onClick={setGridView}><BsFillGridFill /></button>
        <button type="button" className={`${!grid_view && 'active'}`} onClick={setListView}><BsList /></button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: .75rem;

    .btn-container {
      width: 50px;
    }
    
    label {
      display: inline-block;
      margin-right: .5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: .5rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      color: var(--clr-black);
      border: 1px solid var(--clr-black);
      border-radius: var(--radius);
      background: transparent;
      cursor: pointer;

      svg {
        font-size: 1rem;
      }
    }

    .active {
      color: var(--clr-white);
      background: var(--clr-black);
    }
  }

  .sort-input {
    padding: .25rem .5rem;
    font-size: 1rem;
    text-transform: capitalize;
    border-color: transparent;
    border-radius: .25rem;
    background-color: var(--clr-grey-10);
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;