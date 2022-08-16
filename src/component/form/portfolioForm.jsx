import { useEffect, useRef } from "react";
import classes from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../store/index";
import { useState } from "react";

const PortoForm = (props) => {
  const [img, setImg] = useState();
  const [imgs, setImgs] = useState();

  const TitleRef = useRef();
  const descripRef = useRef();
  const mediaRef = useRef();
  const linkRef = useRef();
  const loginId = useSelector((state) => state.user.loginID);

  const dispatch = useDispatch();
  console.log(img);
  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgs(reader.result);
      }; 
      reader.readAsDataURL(img);
    }
  }, [img]);
  console.log(imgs);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: loginId,
      title: TitleRef.current.value,
      descrip: descripRef.current.value,
      img: imgs,
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
            <input type="text" name="link" required ref={linkRef} />
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
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setImg(file);
                }else{
                setImg(null);

                }
              }}
            />
          </div>
        </div>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default PortoForm;
