import React from 'react';
import './ResumeDisplay.css';

function ResumeDisplay({ resume }) {
  return (
    <div className="resume-container">
      <h2>{resume.name}</h2>
      <p><strong>About:</strong> {resume.about}</p>
      <p><strong>Skills:</strong> {resume.skills}</p>
      <p><strong>Experience:</strong> {resume.experience}</p>
    </div>
  );
}

export default ResumeDisplay;
