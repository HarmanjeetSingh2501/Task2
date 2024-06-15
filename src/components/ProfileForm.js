// ProfileForm.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/ProfileForm.css';

const ProfileForm = ({ nextStep, setStep, step }) => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  // Update form data function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Save form data to localStorage function
  const saveFormDataToLocalStorage = () => {
    localStorage.setItem('profileFormData', JSON.stringify(formData));
  };

  return (
    <div className="form-container">
      <Navbar step={step} setStep={setStep} />
      <span className='view-description'> Step 1</span>
      <h2 className="title">Your Profile</h2>
      <p className='subtitle'> Enter the login information of your account. You will able to create additional users after registering.</p>

      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password*</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            nextStep();
            saveFormDataToLocalStorage();
          }}
          className="primary"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
