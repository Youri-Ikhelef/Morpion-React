import "./App.css";
import SelectMode from "./components/Main/SelectMode";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Morpion from "./components/Main/morpion/Morpion";
import { MorpionProvider } from "./components/Main/morpion/MorpionContext";
import { useRef } from "react";

function App() {
  const mainRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main" ref={mainRef}>
        <MorpionProvider mainRef={mainRef}>
          <SelectMode />
          <Morpion />
        </MorpionProvider>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
