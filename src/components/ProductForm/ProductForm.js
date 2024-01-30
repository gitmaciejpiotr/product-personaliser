import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>
                    {props.sizes.map(size => <OptionSize key={size.name} name={size.name} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />)}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                    {props.colors.map(color => <OptionColor key={color} color={color} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />)}
                </ul>
            </div>
            <Button className={styles.button} onClick={e => props.buttonAction(e)}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

ProductForm.propTypes = {
    colors: PropTypes.array,
    sizes: PropTypes.array,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func,
    buttonAction: PropTypes.func,
};

export default ProductForm;