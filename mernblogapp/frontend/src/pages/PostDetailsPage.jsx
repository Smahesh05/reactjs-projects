import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const PostDetailsPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPostInfo(data));
  }, [id]);

  if (postInfo === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post__details-page">
      <h1>{postInfo.postTitle}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">By {postInfo.author.name}</div>
      {userInfo._id === postInfo.author._id && (
        <div className="edit-blog">
          <Link to={`/edit/${postInfo._id}`} className="edit-btn">
            <FaEdit /> Edit this post
          </Link>
        </div>
      )}
      <div className="image">
        <img src={postInfo.cover} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.postContent }}
      />
    </div>
  );
};

export default PostDetailsPage;
