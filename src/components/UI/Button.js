import classes from './Button.module.css';

const Button = ({ children, onClick, classNames }) => {
  // const show = mobile ?

  return (
    <button className={classes[classNames]} onClick={onClick} type='button'>
      {children}
    </button>
  );
};

export default Button;
