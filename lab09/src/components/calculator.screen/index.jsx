import "./style.css";

export default function Screen(props) {
  return(
    <input type="number" value={props.value} class="screen" readOnly={true} />
  );
}