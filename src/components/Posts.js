import { Post } from './Post';

export const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">Постов нет</p>;
  }
  return posts.map((post) => <Post post={post} />);
};

export default Posts;
