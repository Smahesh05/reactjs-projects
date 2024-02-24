import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./App.css";

import Header from "./components/Header";
import CreateBlogPage from "./pages/CreateBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
          <Route path="/post/:id" element={<PostDetailsPage />} />
          <Route path="/edit/:id" element={<EditBlogPage />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
