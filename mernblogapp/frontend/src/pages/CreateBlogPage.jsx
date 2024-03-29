import axios from "axios";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";

const CreateBlogPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postSummary, setPostSUmmary] = useState("");
  const [postContent, setPostContent] = useState("");
  const [files, setFiles] = useState("");

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("postTitle", postTitle);
    data.set("postSummary", postSummary);
    data.set("postContent", postContent);
    data.set("file", files[0]);

    const res = await axios.post(
      "http://localhost:5000/api/posts/create",
      data,
      {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      }
    );

    if (res.ok) {
      navigate("/");
    }

    setPostTitle("");
    setPostSUmmary("");
    setPostContent("");
  };

  return (
    <form onSubmit={submitHandler}>
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
        id=""
      />
      <Editor onChange={setPostContent} value={postContent} />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreateBlogPage;
