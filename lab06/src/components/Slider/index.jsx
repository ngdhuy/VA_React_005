import Picture from '../Picture';

export default function Slider(props) {
  const pictures = props.pictures;
  return(
    <>
      {pictures.map(pic => <Picture value={pic} />)}
    </>
  );
}