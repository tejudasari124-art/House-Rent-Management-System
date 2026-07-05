import { Link } from "react-router-dom";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="container mt-5">

      <h2 className="mb-5">
        Welcome {user?.name} 👋
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card shadow text-center p-4">

            <h1>🏠</h1>

            <h4>Properties</h4>

            <Link
              to="/properties"
              className="btn btn-primary"
            >
              View Properties
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card shadow text-center p-4">

            <h1>📅</h1>

            <h4>Bookings</h4>

            <Link
              to="/bookings"
              className="btn btn-success"
            >
              My Bookings
            </Link>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card shadow text-center p-4">

            <h1>➕</h1>

            <h4>Add Property</h4>

            <Link
              to="/add-property"
              className="btn btn-warning"
            >
              Add Property
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;