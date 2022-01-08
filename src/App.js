import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://elastic-tesla-33daed.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Lucy Shaw{" "}
          </a>
          and{" "}
          <a
            href="https://github.com/Pumpkin92/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
