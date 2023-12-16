import React, { useState } from 'react';

const PasswordValidationForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation logic
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      // Password is valid, you can submit the form or perform other actions
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="conatiner">
      <h2 className="h2"> Password Validation Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className ="form-input">
            <label htmlFor="email">email:</label>
            <input type="email" required />
        </div>
        <div className="form-input">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <div className="form-input">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            />
        </div>
        {passwordError && <p style={{ color: 'red',text:"center" }}>{passwordError}</p>}
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
    
  );
};

export default PasswordValidationForm;
