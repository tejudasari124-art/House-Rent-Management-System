import { useState } from "react";
import API from "../services/api";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/register", formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {

      alert(error.response?.data?.message || "Registration Failed");

    }
  };

  return (

    <div className="container mt-5" style={{ maxWidth: "500px" }}>

      <h2 className="text-center mb-4">
        Register
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;