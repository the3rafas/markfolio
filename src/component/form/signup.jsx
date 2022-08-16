import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./form.module.css";
import { action } from "../../store/index";
import { useNavigate } from "react-router-dom";
const SignUPform = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const RepasswordRef = useRef();
  const users = useSelector((state) => state.user.users);
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    // if (passwordRef.current.value === RepasswordRef.current.value) {
      const validData = {
        // id: `m${users.length}`,
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      Dispatch(action.logUpFun(validData));
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      RepasswordRef.current.value = "";
    //   navigate("/login",{replace:true})
    // } else {
    //   throw new Error("no password match");
    // }
  };
  return (
    <form className={classes.loginForm} onSubmit={handelSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password1" ref={passwordRef} />
        <input type="password" name="password2" ref={RepasswordRef} />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};
export default SignUPform;
