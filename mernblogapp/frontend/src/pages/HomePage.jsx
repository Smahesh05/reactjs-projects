import { useEffect, useState } from "react";
import PostList from "../components/PostList";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const getALLPosts = async () => {
    const res = await fetch(`http://localhost:5000/api/posts/getposts`);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getALLPosts();
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
