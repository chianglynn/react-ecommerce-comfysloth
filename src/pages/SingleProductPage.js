import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { AddToCart, Error, Loading, PageHero, ProductImages, Stars } from '../components';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) setTimeout(() => history.push('/'), 3000);
    // eslint-disable-next-line
  }, [error]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { id: sku, name, price, images, description, company, stock, stars, reviews } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">back to products</Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>available :</span>{stock > 0 ? 'in stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU :</span>{sku}
            </p>
            <p className="info">
              <span>brand :</span>{company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  .price {
    color: var(--clr-primary-5);
  }

  .desc {
    max-width: 45em;
    line-height: 2;
  }

  .info {
    display: grid;
    grid-template-columns: 125px 1fr;
    width: 300px;
    text-transform: capitalize;

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;