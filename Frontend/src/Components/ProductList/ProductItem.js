import React from "react";
import PropTypes from "prop-types";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product__card">
      <img
        className="product__image"
        src={product.image.url}
        alt={product.name}
      />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
