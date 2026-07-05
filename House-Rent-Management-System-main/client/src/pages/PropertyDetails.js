import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function PropertyDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

 useEffect(() => {
    const fetchProperty = async () => {
        try {
            const res = await API.get(`/properties/${id}`);
            setProperty(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchProperty();
}, [id]);

  const handleBooking = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await API.post(
      "/booking/book",
      {
        property: property._id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert(res.data.message);

    navigate("/bookings");

  } catch (error) {
    alert(error.response?.data?.message || "Booking Failed");
  }
};

  if (!property) {

    return <h3 className="text-center mt-5">Loading...</h3>;

  }

  return (

    <div className="container mt-5">

      <div className="card shadow">

        <img
          src={property.image}
          alt={property.title}
          style={{
            height: "450px",
            objectFit: "cover"
          }}
        />

        <div className="card-body">

          <h2>{property.title}</h2>

          <h4 className="text-success">
            ₹ {property.price}
          </h4>

          <p>
            📍 {property.location}
          </p>

          <p>
            {property.description}
          </p>

          <button className="btn btn-primary"
  onClick={handleBooking}
>
  Book Property
</button>

        </div>

      </div>

    </div>

  );
}

export default PropertyDetails;