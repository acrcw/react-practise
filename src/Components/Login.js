import React, { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    }).then((data) => {
      console.log(data)
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, subscribe: e.target.checked });
  };

  return (
    <div className="form-wrapper">
      <div className="signup-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          {/* <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.subscribe}
                onChange={handleCheckboxChange}
              />{" "}
              Subscribe to newsletter
            </label>
          </div> */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
