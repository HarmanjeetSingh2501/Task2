// Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ step, setStep }) => {
  return (
    <div className="navbar">
      <button
        onClick={() => setStep(1)}
        className={step === 1 ? 'active' : 'inactive'}
      >
        Your Profile
      </button>
      <button
        onClick={() => setStep(2)}
        className={step === 2 ? 'active' : 'inactive'}
      >
        Business Information
      </button>
    </div>
  );
};

export default Navbar;
