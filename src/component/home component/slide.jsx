import classes from "./banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Sli from "../../ui/sli";
const Slide = (props) => {
  const login = useSelector((state) =>state.user.login);

  const click = (e) => {
    e.preventDefault();
  };
  return (
    <Sli img="./images/Group.jpg"  class={classes.slide}>
      <div className={classes.textCon}>
        <h1>
          <span>W</span>elc<span>o</span>m<span>e</span> To
          <br />
          <span className={classes.name}>Markfolio</span>
        </h1>
        {!login && (
          <div>
            <p>create your portfolio here</p>
            <button onClick={click}>
              <Link to="/signup">sign up</Link>
            </button>
            <button onClick={click}>
              <Link to="/login">sign in</Link>
            </button>
          </div>
        )}
      </div>
      <div className={classes.iconCont}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </Sli>
  );
};
export default Slide;
