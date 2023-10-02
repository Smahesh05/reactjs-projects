import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Confirmation from "./components/Confirmation";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Session from "./components/Session";

function App() {
  return (
    <div className="app">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":catId" element={<Category />}>
              <Route path=":sessionId" element={<Session />} />
            </Route>
            <Route index element={<h3>Select a category from above</h3>} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="confirmed" element={<Confirmation />} />
          <Route
            path="*"
            element={<h1 className="not-found">Page Not Found :)</h1>}
          />
        </Routes>
      </>
      <footer className="container">
        &copy; {new Date().getFullYear()} |
        <a href="https://red30tech.com"> Mahesh Solanke</a>
      </footer>
    </div>
  );
}

export default App;
