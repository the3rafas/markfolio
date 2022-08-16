import { Fragment, useState } from "react";
import Sli from "../ui/sli";
import classes from "./pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import PortoForm from "../component/form/portfolioForm";
import Pcard from "../component/portfolio component/pcard";
import { useSelector } from "react-redux";

const Portfolio = (props) => {
  const [show, setShow] = useState(false);
  const templet = useSelector((state) => state.user.templets);
  console.log(templet);
  const addformHandeler = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      {show && <PortoForm done={addformHandeler} />}

      <Sli img="./images/portfolio.jpg" class={classes.portSlide}>
        <h1>Portfolio</h1>
      </Sli>
      <div className={classes.templet}>
        <div className={classes.add}>
          <FontAwesomeIcon
            icon={faAdd}
            className={classes.addIcon}
            onClick={addformHandeler}
          />
        </div>
        <div className={classes.tempCont}>
          {templet.map((e) => (
            <Pcard
              key={e.img}
              title={e.title}
              paragraph={e.descrip}
              img={e.img}
              link={e.link}
              style={classes.temppportfolio}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
