  import classes from "../home component/banner.module.css";
  const Pcard = (props) => {
    const visitSite = () => {
      window.location.href = props.link;
    };
    return (
      <div className={`${classes.Card} ${ props.style}` } onClick={visitSite}>
        <img src={props.img}  alt={props.title} />
        <div>
          <h2> {props.title}</h2>
          <p>{props.paragraph}</p>
        </div>
      </div>
    );
  };
  export default Pcard;
