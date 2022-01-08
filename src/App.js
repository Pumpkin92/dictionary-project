import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
