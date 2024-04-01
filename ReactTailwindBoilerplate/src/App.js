import HomeMainContent from "./HomeMainContent";
import Header from "./components/Header";
import HeadingSetting from "./components/HeadingSetting";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative">
      <Header />
      <HeadingSetting />
      <main className="container mx-auto flex flex-col md:flex-row justify-center items-start">
        <div className="md:sticky md:top-0">
          <Sidebar />
        </div>
        <div className="flex-grow max-w-3xl pt-8 px-2">
          <HomeMainContent />
        </div>
      </main>
    </div>
  );
}

export default App;
