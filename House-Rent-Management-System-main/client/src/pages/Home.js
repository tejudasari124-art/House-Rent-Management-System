import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h1 className="display-3 fw-bold">
            Find Your Dream Home
          </h1>

          <p className="lead mt-3">
            Browse hundreds of verified rental properties across India.
          </p>

          <div className="mt-4">
            <Link
              to="/properties"
              className="btn btn-warning btn-lg me-3"
            >
              View Properties
            </Link>

            <Link
              to="/register"
              className="btn btn-outline-light btn-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container mt-5">

        <div className="row text-center">

          <div className="col-md-4">
            <h1 className="text-primary">500+</h1>
            <h5>Properties</h5>
          </div>

          <div className="col-md-4">
            <h1 className="text-success">1000+</h1>
            <h5>Happy Customers</h5>
          </div>

          <div className="col-md-4">
            <h1 className="text-danger">50+</h1>
            <h5>Cities Covered</h5>
          </div>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="container mt-5 mb-5">

        <h2 className="text-center mb-5">
          Why Choose House Rent?
        </h2>

        <div className="row">

          <div className="col-md-4 text-center">
            <div className="card shadow p-4 h-100">
              <h1>🏠</h1>
              <h4>Verified Properties</h4>
              <p>
                Every property is verified before listing.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="card shadow p-4 h-100">
              <h1>💰</h1>
              <h4>Affordable Rent</h4>
              <p>
                Best rental deals at reasonable prices.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="card shadow p-4 h-100">
              <h1>📞</h1>
              <h4>24×7 Support</h4>
              <p>
                Our support team is always ready to help.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;