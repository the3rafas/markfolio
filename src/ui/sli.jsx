
const Sli = (props) => {

    const bgc={
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",}

  return (
    <section style={bgc} className={props.class}>
      {props.children}
    </section>
  );
};
export default Sli;
