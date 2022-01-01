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
          Coded by Lucy Shaw and open-sourced on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
