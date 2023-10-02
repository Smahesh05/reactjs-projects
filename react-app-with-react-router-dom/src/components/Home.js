import React from "react";
import featImg from "../assets/img-main.jpg";

const Home = () => {
  return (
    <div className="container">
      <img src={featImg} className="img-feat" alt="Red30 tech" />
      <h1>WelCome</h1>
      <p>
        This is fictitious company and created by
        <a
          href="http://www.linkedin.com/feed"
          target="_blank"
          rel="noreferrer noopener"
        >
          linkedin
        </a>
        , solely for the creation and development of educational training
        materials. Any resemblance to real products or services is purely
        coincidental. Information provided about the products or services is
        also fictitious and should not be construed as representative of actual
        products or services on the market in a similar product or service
        category.
      </p>
    </div>
  );
};

export default Home;
