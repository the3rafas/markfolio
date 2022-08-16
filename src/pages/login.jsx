import { Link } from "react-router-dom";
import clasess from "./pages.module.css";
import LogINForm from "../component/form/login";

const LogIN = () => {
  return (
    <div>
      <LogINForm />
      <div className={clasess.switch}>   
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
export default LogIN;
