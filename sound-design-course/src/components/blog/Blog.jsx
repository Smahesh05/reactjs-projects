import React from "react";
import { blog1, blog2, blog3 } from "../../assets";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Post</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="">
              <img src={blog1} alt="" />
            </a>

            <a href="#">
              <h3 className="post-title">
                How to use Drum Machine in logic Pro x
              </h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">Mixing</div>
            <a href="">
              <img src={blog2} alt="" />
            </a>

            <a href="#">
              <h3 className="post-title">How to mix Guitars Effectively</h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">Vox</div>
            <a href="">
              <img src={blog3} alt="" />
            </a>

            <a href="#">
              <h3 className="post-title">
                The real power of Harmonies in Music production
              </h3>
            </a>
          </div>
        </div>

        <div className="btn-container">
          <a href="#" className="all-post-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
