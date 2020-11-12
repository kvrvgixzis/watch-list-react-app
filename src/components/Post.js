import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/posts';

export const Post = ({ post }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="post">
      <div className="post__body">
        <h5 className="post__title">{post.title}</h5>
        <p>{post.body}</p>
        <button className="post__delete" onClick={deleteBtnHandler}>
          Delete post
        </button>
      </div>
    </div>
  );
};
