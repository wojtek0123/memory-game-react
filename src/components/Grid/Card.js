const Card = ({ className, onClick, id }) => {
	return <div className={className} onClick={onClick} id={id} data-testid='cardTest' />;
};

export default Card;
