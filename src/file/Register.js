import React from "react";

function Register({ formData }) {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          defaultValue={formData.name}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          defaultValue={formData.email}
          placeholder="Email"
        />
        {/* Add more form inputs as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
