import classes from "../component/header/header.module.css";
const Icon = (props) => {
    
  return ( 
      <div className={classes.icon} onClick={props.active}>
        <span></span>
        <span className={classes.hovSpan}></span>
        <span></span>
      </div>
  );
};
export default Icon;
