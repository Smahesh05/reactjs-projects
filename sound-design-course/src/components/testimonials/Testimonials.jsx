import React from "react";
import { emilySmith, peter, robertFox } from "../../assets";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students says?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={peter} alt="" />
            <div className="review-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={robertFox} alt="" />
            <div className="review-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Google</div>
              <div className="review">
                I got to learn a lot about music production with this course.
                Thanks :&#x29;
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={emilySmith} alt="" />
            <div className="review-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Google</div>
              <div className="review">Awsome! great job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
