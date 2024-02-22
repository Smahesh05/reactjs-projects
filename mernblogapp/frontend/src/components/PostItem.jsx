const PostItem = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://gorillagadgets.com/cdn/shop/articles/modern-glass-home-in-winter_900x.jpg?v=1667210419"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            The Gorilla Gadgets Blog Is Your Destination For All Things Tech
          </h2>
          <p className="info">
            <a href="#" className="author">
              Mahesh Solake
            </a>
            <time>2024-02-22 | 16:45</time>
          </p>
          <p className="summary">
            If you`re looking to expand your gadget knowledge, you`ve come to
            the right place. Here on our gadget blog, you`ll find the latest
            information you need in order to stay on-trend and on track in the
            ever-changing world of convenient technology! Gadgets are here to
            make your life easier a
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
