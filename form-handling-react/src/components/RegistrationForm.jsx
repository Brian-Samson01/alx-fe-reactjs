import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const { username, email, password } = formData; // <-- Destructure values

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register (Controlled)</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
