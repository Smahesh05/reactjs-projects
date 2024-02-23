/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="place-list center">
        <>
          <h2>No blog post found. May be create one?</h2>
          <Link to="/create">Share Blog post</Link>
        </>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
