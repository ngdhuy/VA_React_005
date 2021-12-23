// component Images
import "./style.css";

export default function Image(props) {
  let index = props.index;
  return(
      <img src={`img/img${index}.jpeg`} />
  );
}