import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Lucy Shaw and{" "}
          <a
            href="https://github.com/Pumpkin92/dictionary-project"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
