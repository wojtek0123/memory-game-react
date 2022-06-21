import classes from './Button.module.css';

const Button = ({ children, onClick }) => {
	return <button className={classes.button} onClick={onClick} type='button'>{children}</button>;
};

export default Button;
