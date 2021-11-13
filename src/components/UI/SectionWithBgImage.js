const SectionWithBgImage = (props) => {
  const style = {
    background: `url(${props.bgImage}) no-repeat center center`,
    backgroundSize: "cover",
  };

  if (props.height) {
    style["height"] = props.height;
  }

  return (
    <div
      id={props.id}
      className={`${props.className} d-flex align-items-center`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default SectionWithBgImage;
