import React, { useState } from "react";
import "./Header.css";
import { FaUser, FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";
// import { RiRadioButtonLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const jobconselling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
    qualification: "",
    interestedJob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      file: "",
      qualification: "",
      interestedJob: "",
    });
  };

  return (
    <React.Fragment>
      return (
      <>
        <div class="job-counselling-container">
          <div class="job-counselling-header">
            <h1>JOB COUNSELLING</h1>
            <br />
            <p>
              Job Counselling is a systematic process that helps an individual
              understand oneself, as well as the world of work, to choose the
              right career.
            </p>
          </div>

          <div class="job-counselling-form">
            <form onSubmit={handleSubmit}>
              <div class="input-group">
                <label for="name">
                  <FaUser className="icon" />
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="input-group">
                <label for="email">
                  <FaEnvelope className="icon" />
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="input-group">
                <label for="phone">
                  <FaPhone className="icon" />
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div class="input-group">
                <label for="file">
                  <FaFileAlt className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                />
              </div>

              <div class="input-group">
                <label for="qualification">
                  <FaUser className="icon" />
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div>
                <h3 class="radio-group-heading">Interested Field</h3>
                <div class="radio-group">
                  <label class="radio-label">
                    <input
                      type="radio"
                      id="job1"
                      name="interestedJob"
                      value="Job 1"
                      checked={formData.interestedJob === "Job 1"}
                      onChange={handleInputChange}
                    />
                    IT
                  </label>

                  <label class="radio-label">
                    <input
                      type="radio"
                      id="job2"
                      name="interestedJob"
                      value="Job 2"
                      checked={formData.interestedJob === "Job 2"}
                      onChange={handleInputChange}
                    />
                    Non_IT
                  </label>

                  <label class="radio-label">
                    <input
                      type="radio"
                      id="job3"
                      name="interestedJob"
                      value="Job 3"
                      checked={formData.interestedJob === "Job 3"}
                      onChange={handleInputChange}
                    />
                    Others
                  </label>
                </div>
              </div>

              <div class="terms-and-conditions">
                <label for="terms-checkbox">
                  <input type="checkbox" id="terms-checkbox" /> I agree to the
                  terms and conditions
                </label>
              </div>
              <div className="button-Cantainer">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default jobconselling;
