import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="IconCredits">
        <a
          target="_blank"
          href="https://icons8.com/icon/21576/star-wars"
          rel="noreferrer"
        >
          Star Wars
        </a>
        icon by
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </div>
    </div>
  );
}

export default App;
