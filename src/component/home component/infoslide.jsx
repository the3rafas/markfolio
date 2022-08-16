import Sec from "../../ui/sec";
import classes from "./banner.module.css";

const infoSlide = (props) => {
  return (
    <Sec>
      <h1 className={classes.about}>About us</h1>
      <div className={classes.infoSlide}>
        <iframe className={classes.iframe}
          width="500"
          height="315"
          src="https://www.youtube.com/embed/txIpSuncUO8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={classes.info}>
          <details>
            <summary>first</summary>
            <p>thi is details</p>
          </details>
          <details>
            <summary>second</summary>
            <p>thi is details</p>
          </details>
          <details>
            <summary>third</summary>
            <p>thi is details</p>
          </details>
        </div>
      </div>
    </Sec>
  );
};
export default infoSlide;
