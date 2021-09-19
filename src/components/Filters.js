import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';

const Filters = () => {
  const { all_products, filters: { text, company, category, color, min_price, max_price, price, shipping }, updateFilters, clearFilters } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input type="text" name="text" placeholder="search" className="search-input" value={text} onChange={updateFilters} />
          </div>

          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((item, index) => <button type="button" name="category" key={index} className={`${category === item && 'active'}`} onClick={updateFilters}>{item}</button>)}
            </div>
          </div>

          <div className="form-control">
            <h5>company</h5>
            <select name="company" id="company" className="company" value={company} onChange={updateFilters}>
              {companies.map((item, index) => <option value={item} key={index}>{item}</option>)}
            </select>
          </div>

          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((item, index) => {
                if (item === 'all') return (
                  <button type="button" name="color" className={`all-btn ${color === 'all' && 'active'}`} data-color="all" key={index} onClick={updateFilters}>all</button>
                );

                return (
                  <button type="button" name="color" className={`color-btn ${color === item && 'active'}`} style={{ backgroundColor: item }} data-color={item} key={index} onClick={updateFilters}>
                    {color === item && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input type="range" name="price" id="price" min={min_price} max={max_price} value={price} onChange={updateFilters} />
          </div>

          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />
          </div>
        </form>

        <button type="button" className="clear-btn" onClick={clearFilters}>clear filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;

    h5 {
      margin-bottom: .5rem;
    }
  }

  .search-input {
    padding: .5rem;
    letter-spacing: var(--spacing);
    border-color: transparent;
    border-radius: var(--radius);
    background-color: var(--clr-grey-10);
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    padding: .25rem 0;
    margin: .25em 0;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    border: none;
    border-bottom: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .company {
    padding: .25rem;
    border-color: transparent;
    border-radius: var(--radius);
    background-color: var(--clr-grey-10);
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .color-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    background-color: #222;
    cursor: pointer;
    opacity: .5;

    svg {
      font-size: .5rem;
      color: var(--clr-white);
    }
  }

  .all-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
    opacity: .5;
  }
  .active {
    opacity: 1;
  }
  
  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: .25rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: .5rem;
    align-items: center;
    font-size: 1rem;
    text-transform: capitalize;
  }

  .clear-btn {
    padding: .25rem .5rem;
    color: var(--clr-white);
    border-radius: var(--radius);
    background-color: var(--clr-red-dark);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;