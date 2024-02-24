import axios from "axios";
import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);
  const getALLPosts = async () => {
    const res = await axios.get(`http://localhost:5000/api/posts/`, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });

    setMyBlogs(res.data);
  };

  useEffect(() => {
    getALLPosts();
  }, []);

  if (myBlogs.length === 0) {
    return <p>No blog Add one</p>;
  }
  return (
    <div>
      <div className="profile">
        <>
          👋, {userInfo.name}
          <span> you have created {myBlogs.length} blog</span>
        </>
      </div>
      <ul className="my-blog-list">
        {myBlogs.map((blog) => (
          <li key={blog._id} className="my-blog-item">
            <Link to={`/post/${blog._id}`}>
              <div className="image">
                <img src={blog.cover} />
              </div>
            </Link>
            <div>
              <time>{formatISO9075(new Date(blog.createdAt))}</time>
              <h3>{blog.postTitle}</h3>
              <p>{blog.postSummary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
