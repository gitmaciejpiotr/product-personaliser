import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => (
    <li><button type="button" className={clsx(styles['color' + props.color.charAt(0).toUpperCase() + props.color.slice(1)], props.color === props.currentColor && styles.active)} value={props.color} onClick={e => props.setCurrentColor(e.target.value)}></button></li>
);

OptionColor.propTypes = {
    key: PropTypes.string,
    color: PropTypes.string,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
};

export default OptionColor;