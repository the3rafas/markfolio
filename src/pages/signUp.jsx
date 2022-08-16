import { Link } from "react-router-dom";
import SignUPform from "../component/form/signup";
import clasess from "./pages.module.css";
const SignUp = () => {
  return (
    <div>
      <SignUPform />
      <div className={clasess.switch}>
        <Link to="/login">logIN</Link>
      </div>
    </div>
  );
};
export default SignUp;
