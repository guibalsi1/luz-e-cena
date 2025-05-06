import classNames from 'classnames';
import styles from './Tag.module.css';
import type { Category, Age } from '../../types';



interface TagProps {
    value: Category | Age;
}

const tagClasses = {
    Livre: styles.allages,
    "10 anos": styles.ten,
    "12 anos": styles.twelve,
    "14 anos": styles.fourteen,
    "16 anos": styles.sixteen,
    "2D": styles.twoD,
    "3D": styles.threeD,
  };

const Tag = ({ value }:TagProps) => {
    const classes = classNames(styles.tag, tagClasses[value] );
    return (
        <span className={classes}>{value}</span>
    )
}

export default Tag