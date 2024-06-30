import React, { useState } from 'react';
import './App.css';
import ResumeForm from './components/ResumeForm';
import ResumeDisplay from './components/ResumeDisplay';

function App() {
  const [resume, setResume] = useState(null);

  const handleSave = (data) => {
    setResume(data);
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      {!resume ? (
        <ResumeForm onSave={handleSave} />
      ) : (
        <ResumeDisplay resume={resume} />
      )}
    </div>
  );
}

export default App;
