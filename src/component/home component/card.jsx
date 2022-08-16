import classes from "./banner.module.css";
const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.img} alt={props.title} />
      <div>
        <h2> {props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};
export default Card;
