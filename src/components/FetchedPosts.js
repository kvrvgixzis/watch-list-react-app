import { Post } from './Post';

export const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Загрузить посты</button>;
  }
  return posts.map((post) => <Post post={post} />);
};

export default FetchedPosts;
