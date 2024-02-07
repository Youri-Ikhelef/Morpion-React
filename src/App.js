import "./App.css";
import Choix from "./components/Choix";
import Morpion from "./components/morpion/Morpion";
import { MorpionProvider } from "./components/morpion/MorpionContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Morpion</h1>
        <h2>Jeu de Morpion - TicTacToe local</h2>
      </header>
      <main className="App-main">
        <MorpionProvider>
          <Choix />
          <Morpion />
        </MorpionProvider>
      </main>
    </div>
  );
}

export default App;
