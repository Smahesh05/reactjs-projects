import Footer from "./components/Footer";
import Header from "./components/Header";
import PlayerPlayList from "./components/PlayerPlayList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="player-container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="player-playlist">
          <PlayerPlayList />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
