import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./components/Login/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
