import React, { useState } from 'react';
import './ResumeForm.css';

function ResumeForm({ onSave }) {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, about, skills, experience });
  };

  return (
    <div className="form-container">
      <h2>Create Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>About:</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)}></textarea>
        </div>
        <button type="submit">Save Resume</button>
      </form>
    </div>
  );
}

export default ResumeForm;
