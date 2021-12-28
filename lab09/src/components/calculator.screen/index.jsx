import "./style.css";

export default function Screen(props) {
  return(
    <input type="text" value={props.value} className="screen" readOnly={true} />
  );
}