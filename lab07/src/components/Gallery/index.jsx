// component Gallery
import Image from "../Image";
import './style.css';

export default function Gallery(props) {
  let list_1 = props.list.filter(item => item <= 5);
  let list_2 = props.list.filter(item => (item > 5) && (item <= 10));
  let list_3 = props.list.filter(item => item > 10);
  console.log(list_1);
  console.log(list_2);
  return(
    <div class="container">
      <div>
        { list_1.map(item => <Image index={item} />) }
      </div>
      <div>
        { list_2.map(item => <Image index={item} />) }
      </div>
      <div>
        { list_3.map(item => <Image index={item} />) }
      </div>
    </div>
  );
}