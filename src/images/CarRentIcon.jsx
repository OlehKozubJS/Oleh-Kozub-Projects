import icons from "./icons.svg";

const SVGimage = ({ name }) => {
  return (
    <svg style={{ width: "20px", height: "20px" }}>
      <use xlinkHref={`../images/icons.svg#${name}`} />
    </svg>
  );
};

export { SVGimage };
