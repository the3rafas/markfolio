import { useEffect, useRef } from "react";
import classes from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../store/index";

const PortoForm = (props) => {
  const TitleRef = useRef();
  const descripRef = useRef();
  const mediaRef = useRef();
  const linkRef = useRef();
  const loginId = useSelector((state) => state.user.loginID);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: loginId,
      title: TitleRef.current.value,
      descrip: descripRef.current.value,
      img: mediaRef.current.value,
      link: linkRef.current.value,
    };
    dispatch(action.addtempFun(data));
    props.done();
  };
  return (
    <div className={classes.templet}>
      <form onSubmit={handelSubmit}>
        <div className={classes.formControl}>
          <div>
            <label htmlFor="Title">Title</label>
            <input type="text" name="Title" required ref={TitleRef} />
          </div>
          <div>
            <div>
              <label htmlFor="Discription">Discrip</label>
              <textarea
                required
                cols="10"
                name="Discription"
                rows="10"
                ref={descripRef}
              ></textarea>
            </div>
          </div>
        </div>

        <div className={classes.formControl}>
          <div>
            <label htmlFor="Link">Link</label>
            <input type="text" name="Title" required ref={linkRef} />
          </div>
        </div>
        <div className={classes.formControl}>
        <div>
          <label htmlFor="img">media</label>
          <input
            type="file"
            name="media"
            required
            ref={mediaRef}
            accept="image/*"
          />
        </div>
        </div>
       
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default PortoForm;
