import { connect } from 'react-redux';
import { Post } from './Post';

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center">Постов нет</p>;
  }
  return posts.map((post) => <Post post={post} />);
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Posts);
