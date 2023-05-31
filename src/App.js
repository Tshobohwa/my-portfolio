import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MediaList from "./components/MediaList/MediaList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [bgImg, setBgImg] = useState(false);
  useEffect(() => {
    setBgImg(true);
  }, []);
  return (
    <div className={`App .app--bg__img ${bgImg ? "" : "no--bg__img"}`}>
      <header className="app--header">
        <NavBar />
      </header>
      <main className="app--main__section">
        <Home />
        <About />
        <MediaList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
