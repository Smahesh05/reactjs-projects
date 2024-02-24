import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

const CreateBlogPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postSummary, setPostSUmmary] = useState("");
  const [postContent, setPostContent] = useState("");
  const [files, setFiles] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPostTitle(data.postTitle);
        setPostSUmmary(data.postSummary);
        setPostContent(data.postContent);
      });
  }, [id]);

  const updatePostHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("postTitle", postTitle);
    data.set("postSummary", postSummary);
    data.set("postContent", postContent);

    if (files?.[0]) {
      data.set("files", files?.[0]);
    }

    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, data, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });
      setPostTitle("");
      setPostSUmmary("");
      setPostContent("");
      navigate("/post/" + id);
    } catch (error) {
      console.log(error?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={updatePostHandler}>
      <input
        type="text"
        placeholder="Title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={postSummary}
        onChange={(e) => setPostSUmmary(e.target.value)}
      />
      <input
        type="file"
        name="files"
        onChange={(e) => setFiles(e.target.files)}
        id="file"
      />
      <Editor onChange={setPostContent} value={postContent} />
      <button style={{ marginTop: "5px" }}>Update Blog Post</button>
    </form>
  );
};

export default CreateBlogPage;
