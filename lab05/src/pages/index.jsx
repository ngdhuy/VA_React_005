import NumberList from "../components/NumberList";
import Blog from "../components/Blog";

export default function Index() {
  const numbers = [1, 2, 3, 4, 5];
  return(
    <>
      <NumberList numbers={numbers} />
      <hr />
      <Blog posts={posts} />
    </>
  );
}

const posts = [
  {id: 1, title: 'Hello React', content: 'Welcome to learning React'},
  {id: 2, title: 'Installation', content: 'Follow page https://reactjs.org'},
  {id: 3, title: 'Framework', content: 'We can use NextJS framework for React App'}
];