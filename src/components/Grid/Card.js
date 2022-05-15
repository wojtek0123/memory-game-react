const Card = (props) => {
	return (
		<div 
      className={props.className}
      onClick={props.onClick}
      id={props.id}
    />
	);
};

export default Card;
