import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import { Loader } from './Loader';
import { Post } from './Post';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  const clickHandler = () => {
    dispatch(fetchPosts());
  };

  if (loading) {
    return <Loader />;
  }

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
