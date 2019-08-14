import React, { useState } from 'react';
import Form from "./components/Form";
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
        {
          teamMembers.map( member => {
            return <p>{member.name} {member.email}</p>
          }
            )
        }
      </div>
    </div>
  );
}

export default App;
