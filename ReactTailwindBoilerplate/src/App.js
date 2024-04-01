import { useState } from "react";
import DeleteManagement from "./DeleteManagement";
import NotiFication from "./components/UIElements/NotiFication";
import Header from "./components/layouts/Header";
import HeadingSetting from "./components/layouts/HeadingSetting";
import Sidebar from "./components/layouts/Sidebar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("dataDeletion");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="relative">
      <Header />
      <HeadingSetting />
      <main className="container mx-auto flex flex-col md:flex-row justify-center items-start">
        <div className="md:sticky md:top-0">
          <Sidebar activeLink={activeLink} setActiveLink={handleActiveLink} />
        </div>
        <div>
          <DeleteManagement />
        </div>
      </main>
      <NotiFication showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
