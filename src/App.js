import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import LogIN from "./pages/login";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Footer from "./component/footer/footer";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home::mail" element={<Home />} />
        <Route path="/profile" element={<Portfolio />} />
        <Route path="/login" element={<LogIN />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
