import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Properties() {

  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Available Properties
      </h2>

      {/* Search & Filters */}

      <div className="row mb-4">

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search by Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Maximum Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

      </div>

      {/* Property Cards */}

      <div className="row">

        {properties
          .filter((property) => {

            const matchesLocation =
              property.location
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesType =
              type === "" || property.type === type;

            const matchesPrice =
              maxPrice === "" ||
              property.price <= Number(maxPrice);

            return (
              matchesLocation &&
              matchesType &&
              matchesPrice
            );

          })
          .map((property) => (

            <div
              className="col-md-4 mb-4"
              key={property._id}
            >

              <div
              className="card h-100 shadow-lg"
              style={{
              borderRadius:"20px",
              transition:"0.3s"
              }}
              >

                <img
                  src={property.image}
                  alt={property.title}
                  className="card-img-top"
                 style={{
                  height:"220px",
                  objectFit:"cover",
                  borderTopLeftRadius:"20px",
                  borderTopRightRadius:"20px"
                }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x220?text=No+Image";
                  }}
                />

                <div className="card-body">

                  <h5>{property.title}</h5>

                  <p>📍 {property.location}</p>

                  <h6 className="text-success">
                    ₹ {property.price}
                  </h6>

                  <span className="badge bg-success">
                    {property.type}
                  </span>

                  <div className="mt-3">

                    <Link
                      to={`/property/${property._id}`}
                      className="btn btn-primary w-100"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Properties;