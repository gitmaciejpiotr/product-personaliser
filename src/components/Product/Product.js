import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const price = useMemo(() => {
    return props.basePrice + props.sizes.find(size => size.name === currentSize).additionalPrice;
  }, [currentSize, props.basePrice, props.sizes])
  const showDetails = (e) => {
    e.preventDefault();
    console.log("Summary");
    console.log("============");
    console.log("Name:", props.title);
    console.log("Price:", price);
    console.log("Size:", currentSize);
    console.log("Color", currentColor);
  }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
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
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number,
};

export default Product;