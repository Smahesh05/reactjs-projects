import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreateBlogPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postSummary, setPostSUmmary] = useState("");
  const [postContent, setPostContent] = useState("");
  const [files, setFiles] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("postTitle", postTitle);
    data.set("postSummary", postSummary);
    data.set("postContent", postContent);
    data.set("file", files[0]);

    fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      body: data,
    });
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
      <ReactQuill
        value={postContent}
        onChange={(newValue) => setPostContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreateBlogPage;
