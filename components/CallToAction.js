export function CallToAction(props) {
  return (
    <div className="cta__conrtainer">
      <h2 className="cta__text">
        {props.cta} <span className="text-blue">{props.span}</span>{" "}
      </h2>
    </div>
  );
}
