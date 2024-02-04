import "./App.css";
import Morpion from "./components/Morpion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Morpion</h1>
        <h2>Jeu de Morpion - TicTacToe local</h2>
      </header>
      <main className="App-main">
        <Morpion />
      </main>
    </div>
  );
}

export default App;
