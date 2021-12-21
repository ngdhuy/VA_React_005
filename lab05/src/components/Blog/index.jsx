import Post from "../Post";

export default function Blog(props) {
  const posts = props.posts;

  return(
    <>
      <h1>Welcome to my Blog</h1>
      <ul>
        {posts.map(item => <Post key={item.id} title={item.title} content={item.content} />)}
      </ul>
    </>
  );
}