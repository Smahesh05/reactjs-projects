import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AdminPanal from "./pages/AdminPanal";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanal />} />
          <Route path="/:id" element={<ProfilePage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
