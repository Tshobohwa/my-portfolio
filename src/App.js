import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="app--header">
        <NavBar />
      </header>
      <main className="app--main__section">
        <Home />
      </main>
    </div>
  );
}

export default App;
