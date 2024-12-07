// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.jpg';

function Banner() {
  return (
    <div className="student-hustle-banner">
      <h1 className="student-hustle-title">Student Hustle</h1>
      <div className="student-hustle-logo-container">
        <img src={logo} alt="Logo" className="student-hustle-logo" />
      </div>
    </div>
  );
}

export default Banner;