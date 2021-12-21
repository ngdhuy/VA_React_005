import NumberItem from "../NumberItem";

export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((item, index) => 
    <NumberItem key={index} value={item} />
  );

  return(
    <ul>{listItems}</ul>
  ); 
}