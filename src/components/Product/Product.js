import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const getPrice = () => {
    return props.basePrice + props.sizes.find(size => size.name === currentSize).additionalPrice;
  }
  const showDetails = (e) => {
    e.preventDefault();
    console.log("Summary");
    console.log("============");
    console.log("Name:", props.title);
    console.log("Price:", getPrice());
    console.log("Size:", currentSize);
    console.log("Color", currentColor);
  }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          colors={props.colors}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          buttonAction={showDetails} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  colors: PropTypes.string,
  sizes: PropTypes.string,
  basePrice: PropTypes.number,
};

export default Product;