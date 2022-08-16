import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Icon from "../../ui/Icon";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import classes from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../store/index";

const Headers = (props) => {
  const { active, changeActive, logOutFun } = props;
  const login = useSelector((state) =>state.user.login);
  return (
    <header className={active ? classes.headerActive : classes.headerDeActive}>
      {!active && <Icon active={changeActive} />}
      {active && (
        <div className={classes.navCont}>
          <FontAwesomeIcon
            icon={faWindowClose}
            className={classes.FontIcon}
            onClick={changeActive}
          />
          <nav>
            <Link to="/home" onClick={changeActive}>
              Home
            </Link>
            {login && (
              <Link to="/profile" onClick={changeActive}>
                portfolio
              </Link>
            )}
            {!login && (
              <Link to="/login" onClick={changeActive}>
                logIN
              </Link>
            )}
            {login && (
              <Link to="/home" onClick={ logOutFun}>
                logOut
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
const Header = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const logOutFun = () => {
    dispatch(action.logOutFun());
    setActive(!active);

  };
  const changeActive = () => {
    setActive(!active);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Headers
          active={active}
          changeActive={changeActive}
          logOutFun={logOutFun}
        />,
        document.getElementById("header")
      )}
    </Fragment>
  );
};
export default Header;
