import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// axios.defaults.baseURL = "http://localhost:5000/api/users";

function App() {
  return (
    <div className="p-4 h-screen flex flex-col min-h-screen">
      <Header />
      <ToastContainer />
      <>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/account" element={<AccountPage />} />
            <Route path="/account/:subPage?" element={<AccountPage />} />
            <Route path="/account/:subPage/:action" element={<AccountPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
