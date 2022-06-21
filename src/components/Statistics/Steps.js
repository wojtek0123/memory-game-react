import classes from './Steps.module.css';

const Steps = ({steps}) => {
	return <div className={classes.steps}>
		<p>Steps: <span>{steps}</span></p>
	</div>	
};

export default Steps;
