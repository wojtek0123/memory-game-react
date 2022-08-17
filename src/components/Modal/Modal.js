import classes from './Modal.module.css';
import Statistics from '../Statistics/Statistics';
import Button from '../UI/Button';
import Leaderboard from '../Leaderboard/Leaderboard';

const Modal = ({ firstGame, onClick }) => {
  return (
    <div className={classes.modal}>
      <h1>Memory Game!</h1>
      {!firstGame && (
        <div>
          <Statistics onClick={onClick} isModalVisible={true} />
          <Button classNames='start' onClick={onClick}>
            Play Again!
          </Button>
          <Leaderboard />
        </div>
      )}
      {firstGame && (
        <div>
          <Button classNames='start' onClick={onClick}>
            Play!
          </Button>
          <Leaderboard />
        </div>
      )}
    </div>
  );
};

export default Modal;
