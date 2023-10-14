import styles from './MyButton.module.css'
import cn from 'classnames'

const MyButton = ({...props}) => {
  return (
    <button className={cn(styles.button)} {...props}>{props.children}</button>
  );
};

export default MyButton;