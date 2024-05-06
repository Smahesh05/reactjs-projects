import React from "react";
import { Blog, Footer, Header, Info, Testimonials, Topics } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
