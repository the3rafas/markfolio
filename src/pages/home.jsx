import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Banner from "../component/home component/banner";
import Card from "../component/home component/card";
import Slide from "../component/home component/slide";
import InfoSlide from "../component/home component/infoslide";



import classes from "./pages.module.css";
import Sec from "../ui/sec";

const Home = () => {
  const params = useParams();
  const login = useSelector((state) => state.user.login);
  const name = useSelector((state) =>
    state.user.users.filter((e) => e.email === params.mail)
  );

  const cards = [
    {
      img: "./images/card-1.jpg",
      title: "be effective with the group",
      paragraph: "share your work with others and take feedback from them",
    },
    {
      img: "./images/card-2.jpg",
      title: "build your portfolio",
      paragraph:
        "add your work and some of your information and let them know who u are and what u aspire to ",
    },
    {
      img: "./images/card-3.jpg",
      title: "write your skills",
      paragraph: "add yourpersonal or technical  skilles ",
    },
  ];

  return (
    <div>
      {login && (
        <Banner
          title={
            name[0] !== undefined
              ? `welcome to our site  ${name[0].name} `
              : "welcome to our site"
          }
        />
      )}
      <Slide />
      <Sec>
        {cards.map((e) => (
          <Card
            key={e.img}
            img={e.img}
            title={e.title}
            paragraph={e.paragraph}
          />
        ))}
      </Sec>
      {!login && (
        <div className={classes.switch}>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
      <InfoSlide />
    </div>
  );
};
export default Home;
