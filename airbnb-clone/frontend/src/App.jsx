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
import MyBookings from "./components/MyBookings";
import MyProfile from "./components/MyProfile";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacesPage from "./pages/PlacesPage";

// axios.defaults.baseURL = "http://localhost:5000/api/users";

function App() {
  return (
    <div className="p-4 px-8 h-screen flex flex-col min-h-screen">
      <Header />
      <ToastContainer />
      <>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/account" element={<AccountPage />}>
              <Route path="/account" element={<MyProfile />} />
              <Route path="/account/bookings" element={<MyBookings />} />
              <Route path="/account/places" element={<PlacesPage />} />
            </Route>
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/place/:id" element={<PlaceDetailsPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
