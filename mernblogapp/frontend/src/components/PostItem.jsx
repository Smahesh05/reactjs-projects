/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";
const PostItem = (props) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${props.post._id}`}>
          <img src={`${props.post.cover}`} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${props.post._id}`}>
          <h2>{props.post.postTitle}</h2>
        </Link>
        <p className="info">
          <a href="#" className="author">
            @{props.post.author.name}
          </a>
          <time>
            {format(new Date(props.post.createdAt), "MMM d, yyyy HH:mm")}
          </time>
        </p>
        <p className="summary">{props.post.postSummary}</p>
      </div>
    </div>
  );
};

export default PostItem;
