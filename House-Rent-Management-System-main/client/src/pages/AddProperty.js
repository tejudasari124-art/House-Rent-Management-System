import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddProperty() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "",
    image: ""
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

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/properties/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(res.data.message);

      navigate("/properties");

    } catch (error) {

      alert(error.response?.data?.message || "Failed to add property");

    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>

      <h2 className="text-center mb-4">
        Add Property
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Type (Apartment, House, Villa)"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100">
          Add Property
        </button>

      </form>

    </div>
  );
}

export default AddProperty;