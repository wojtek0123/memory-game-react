import classes from './Statistics.module.css';
import { useSelector } from 'react-redux/es/exports';

const DisplayStats = ({ type, value }) => {
  return (
    <div className={classes.display}>
      <p>
        {type}: <span>{value}</span>
      </p>
    </div>
  );
};

const Statistics = ({ isModalVisible }) => {
  const steps = useSelector((state) => state.steps.steps);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);

  const displayTime = `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;

  return (
    <div className={`${classes.stats} ${isModalVisible ? classes.column : ''}`}>
      <DisplayStats type='Steps' value={steps} />
      <DisplayStats type='Time' value={displayTime} />
    </div>
  );
};

export default Statistics;
