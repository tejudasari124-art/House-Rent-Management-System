import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/booking/my-bookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBookings(res.data);

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">
        My Bookings
      </h2>

      <div className="row">

        {bookings.length === 0 ? (

          <h4 className="text-center">
            No Bookings Yet
          </h4>

        ) : (

          bookings.map((booking) => (

            <div
              className="col-md-4 mb-4"
              key={booking._id}
            >

              <div
                className="card shadow h-100"
                style={{ borderRadius: "15px" }}
              >

                <img
                  src={booking.property.image}
                  alt={booking.property.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5>
                    {booking.property.title}
                  </h5>

                  <p>
                    📍 {booking.property.location}
                  </p>

                  <h6 className="text-success">
                    ₹ {booking.property.price}
                  </h6>

                  <span className="badge bg-primary">
                    Booked Successfully
                  </span>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default MyBookings;