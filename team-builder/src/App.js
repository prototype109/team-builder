import React, { useState } from 'react';
import './App.css';
import data from './data';
import DisplayTeam from './components/DisplayTeam';

function App() {
  const [team, setTeam] = useState(data);

  return (
    <div className="App">
      <DisplayTeam team={team} />
    </div>
  );
}

export default App;
