import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <div>
        {teamMembers}
      </div>
    </div>
  );
}

export default App;
