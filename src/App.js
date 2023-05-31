import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MediaList from "./components/MediaList/MediaList";
import NavBar from "./components/NavBar/NavBar";
import bgImg from "./assets/images/black-marble.jpeg";

function App() {
  const [bgImgIsLoaded, setBgImgIsLoaded] = useState(false);
  return (
    <div className="App">
      <img
        onLoad={setBgImgIsLoaded(true)}
        className={`app--bg__img ${bgImgIsLoaded ? "" : "no--bg__img"}`}
        src={bgImg}
      />

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
