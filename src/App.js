import React from "react";
import InformationPanel from "./components/information_panel/InformationPanel.js";
import GameScreen from "./components/game_screen/GameScreen.js";

function App() {
  return (
    <div className="App">
      <InformationPanel />
      <GameScreen />
    </div>
  );
}

export default App;
