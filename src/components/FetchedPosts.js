import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import { Post } from './Post';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);

  const clickHandler = () => {
    dispatch(fetchPosts());
  };

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={clickHandler}>
        Загрузить посты
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
