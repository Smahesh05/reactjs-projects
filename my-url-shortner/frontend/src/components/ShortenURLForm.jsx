import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUrl } from "../features/shortenUrls/shortUrlSlice";

function ShortenURLForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(createUrl({ text }));
    console.log(text);
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="text">Url</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            short url
          </button>
        </div>
      </form>
    </section>
  );
}

export default ShortenURLForm;
