import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Header from "./components/Header";
import AdminPage from "./pages/AdminPage";
import EmployeeListPage from "./pages/EmployeeListPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Header />
      <Container className="my-2">
        <Routes>
          <Route path="" element={<AdminRoute />}>
            <Route path="/" element={<AdminPage />} />
            <Route path="/admin" element={<EmployeeListPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
