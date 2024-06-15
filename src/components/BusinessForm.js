import React, { useState } from "react";
import Navbar from "./Navbar.js";
import "../styles/BusinessForm.css";

const BusinessForm = ({ prevStep, nextStep, setStep, step }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
    documents: "",
    beverageWaiver: "",
    coiPdf: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const saveFormDataToLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormDataToLocalStorage();
    alert("The data has been stored");
    nextStep();
  };

  return (
    <div className="form-container">
      <Navbar step={step} setStep={setStep} />
      <span className='view-description'> Step 2</span>
      <h2 className="title">Business Information</h2>
      <p className="subtitle">Please, enter information about your company.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Brand Name*</label>
            <input
              type="text"
              placeholder="Input Your Brand Name"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Brand Type*{" "}
              <span className="tooltip">
                ?
                <span className="tooltiptext">
                  Local: Brands with distribution in 3 divisions or less OR
                  multiple divisions but a total of 150 stores or less.
                  <br />
                  National: Brands with distribution in 4 or more divisions or
                  in more than 150 stores.
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Select Type of Your Brand"
              name="brandType"
              value={formData.brandType}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Street Address*</label>
            <input
              type="text"
              placeholder="Input Your Street Address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City*</label>
            <input
              type="text"
              placeholder="Input City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Zip Code*</label>
            <input
              type="text"
              placeholder="Input Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tax ID Number*</label>
            <input
              type="text"
              placeholder="Input Tax ID Number"
              name="taxIdNumber"
              value={formData.taxIdNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Documents</label>
          <input
            type="text"
            placeholder="Electronically sign the agreement(s)"
            name="documents"
            value={formData.documents}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>
            Non adult beverage Kroger market supplier waiver and release
          </label>
          <input
            type="text"
            placeholder="Electronically sign the agreement(s)"
            name="beverageWaiver"
            value={formData.beverageWaiver}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>COI PDF Upload</label>
          <input
            type="text"
            placeholder="Electronically sign the agreement(s)"
            name="coiPdf"
            value={formData.coiPdf}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-row">
          <button
            type="button"
            onClick={prevStep}
            className="secondary"
          >
            Previous Step
          </button>
          <button
            type="submit"
            className="primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
