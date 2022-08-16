import { useRef } from "react";
import classes from "./form.module.css";
import { useDispatch } from "react-redux";
import { action } from "../../store/index";
import { useNavigate } from "react-router-dom";

const LogINForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handelSubmit = async (e) => {
    e.preventDefault();
    const validData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(action.loginFun( validData));
    navigate(`/home:${emailRef.current.value}`) 

  };
  return (
    <form className={classes.loginForm} onSubmit={handelSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" ref={passwordRef} />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};
export default LogINForm;
