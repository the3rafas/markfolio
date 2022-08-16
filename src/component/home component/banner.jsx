import classes from "./banner.module.css";
const Banner = (props) => {
  return (
    <div className={classes.banner}>
      <h1>{props.title}</h1>
    </div>
  );
};
export default Banner;
