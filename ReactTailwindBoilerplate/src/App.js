import { useState } from "react";
import DeleteManagement from "./DeleteManagement";
import NotiFication from "./components/UIElements/NotiFication";
import Header from "./components/layouts/Header";
import HeadingSetting from "./components/layouts/HeadingSetting";
import Sidebar from "./components/layouts/Sidebar";

function App() {
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
        <div className="absolute top-1/2 right-2">
          <div className="relative">
            <span className="bg-red-500 rounded-full p-1 w-6 h-6 flex justify-center items-center text-center absolute -top-2 -right-1">
              3
            </span>
            <button className="bg-slate-900 text-white py-2 px-4 rounded-md">
              Getting started
            </button>
          </div>
        </div>
      </main>
      <div>
        <NotiFication />
        <div class="fixed top-1/2 -right-9 rotate-270 transform -rotate-90 -translate-y-1/2">
          <p class="flex justify-center text-dark items-center bg-white-200 px-4 py-2 text-sm rounded  shadow">
            Feedback
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
