import React, { useState } from 'react';
import "./from.css"

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

 
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

 
  const validatePassword = (input) => {
    return input.length >= 8;
  };


  const validateConfirmPassword = (input) => {
    return input === password;
  };

  
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(validateConfirmPassword(newConfirmPassword));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Can\'t submit the form. Please check your inputs.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <p>Error: Invalid email format</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordValid ? '2px solid green' : '2px solid red' }}
        />
        {!passwordValid && <p>Error: Password must be at least 8 characters</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ border: confirmPasswordValid ? '2px solid green' : '2px solid red' }}
        />
        {!confirmPasswordValid && <p>Error: Passwords do not match</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
