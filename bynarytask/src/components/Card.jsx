/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card-content ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
