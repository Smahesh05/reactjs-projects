import "./PlayerPlayList.css";

const playlist = [
  {
    id: "1",
    title: "Rhythm of the Night",
    artist: "DeBarge",
    album: "Rhythm of the Night",
    duration: "4:20",
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "6:00",
  },
  {
    id: "3",
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    duration: "6:30",
  },
  {
    id: "4",
    title: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "5:57",
  },
  {
    id: "5",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    duration: "8:02",
  },
  {
    id: "6",
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    album: "The Bodyguard Soundtrack",
    duration: "4:31",
  },
  {
    id: "7",
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "4:54",
  },
  {
    id: "8",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "6:00",
  },
  {
    id: "9",
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    duration: "3:04",
  },
  {
    id: "10",
    title: "Yesterday",
    artist: "The Beatles",
    album: "Help!",
    duration: "2:05",
  },
];

const PlayerPlayList = () => {
  return (
    <>
      <div className="player-playlist-container">
        <div className="player-playlist-header">
          <div className="playlist-image-card"></div>
          <div className="playlist-body">
            <p>PLAYLIST</p>
            <h1>YouTube Mix</h1>
          </div>
        </div>

        <div className="playlist-list">
          <div className="playlist-list-id">#</div>
          <div className="playlist-list-title">TITLE</div>
          <div className="playlist-list-album">ALBUM</div>
          <div className="playlist-list-duration">DURATION</div>
        </div>

        <div className="playlist-list-container">
          {playlist.map((item) => {
            return (
              <div key={item.id} className="playlist-list">
                <div className="playlist-list-id">{item.id}</div>
                <div className="playlist-list-title">{item.title}</div>
                <div className="playlist-list-album">{item.album}</div>
                <div className="playlist-list-duration">{item.duration}</div>
              </div>
            );
          })}
          {/* {playlist.map((item) => {
            return (
              <div key={item.id} className="playlist-list">
                <div className="playlist-list-id">{item.id}</div>
                <div className="playlist-list-title">{item.title}</div>
                <div className="playlist-list-album">{item.album}</div>
                <div className="playlist-list-duration">{item.duration}</div>
              </div>
            );
          })} */}
          {/* {playlist.map((item) => {
            return (
              <div key={item.id} className="playlist-list">
                <div className="playlist-list-id">{item.id}</div>
                <div className="playlist-list-title">{item.title}</div>
                <div className="playlist-list-album">{item.album}</div>
                <div className="playlist-list-duration">{item.duration}</div>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default PlayerPlayList;
