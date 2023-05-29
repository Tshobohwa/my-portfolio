import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import MediaList from "./components/MediaList/MediaList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="app--header">
        <NavBar />
      </header>
      <main className="app--main__section">
        <Home />
        <About />
      </main>
      <MediaList />
    </div>
  );
}

export default App;
