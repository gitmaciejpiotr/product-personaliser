import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => (
    <li><button type="button" className={clsx(props.name === props.currentSize && styles.active)} onClick={e => props.setCurrentSize(e.target.innerHTML)}>{props.name}</button></li>
);

OptionSize.propTypes = {
    name: PropTypes.string,
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func,
};

export default OptionSize;

