import React, { useState } from 'react';
import Form from "./components/Form";
import Cards from "./components/Cards";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  }

  return (
    <div className="App">
      <div>
        <Form addTeamMember={addTeamMember} teamMembers={teamMembers}/>
        <Cards teamMembers={teamMembers}/>
      </div>
    </div>
  );
}

export default App;
