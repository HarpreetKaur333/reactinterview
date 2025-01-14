import { useState } from "react";

function LoginForm() {
  // Step 1: State for email, password, and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Step 2: Validate Email
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Enter a valid email address";
    }
    return ""; // No error
  };

  // Step 3: Validate Password
  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    } else if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return ""; // No error
  };

  // Step 4: Handle Input Changes
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const error = validateEmail(value); // Validate email
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const error = validatePassword(value); // Validate password
    setErrors((prevErrors) => ({ ...prevErrors, password: error }));
  };

  // Step 5: Check if the form is valid
  const isFormValid = !errors.email && !errors.password && email && password;

  // Step 6: Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      {/* Email Input */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Password Input */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
