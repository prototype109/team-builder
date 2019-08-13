import React, { useState } from 'react';
import './App.css';
import data from './data';
import DisplayTeam from './components/DisplayTeam';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState(data);

  const addMember = member => {
    member.id = team.length - 1;
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <Form addMember={addMember} />
      <DisplayTeam team={team} />
    </div>
  );
}

export default App;
