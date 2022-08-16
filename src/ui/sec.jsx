import classes from "./ui.module.css";


const Sec = (props) => {

  return (
    <section className={classes.cont}>
      {props.children}
    </section>
  );
};
export default Sec;
