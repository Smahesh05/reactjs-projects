import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ProfileProvider } from "./utils/profile-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </BrowserRouter>
);
