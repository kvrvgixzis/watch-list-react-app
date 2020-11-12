export const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
      </div>
    </div>
  );
};
