function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h4>🏠 House Rent</h4>
            <p>
              Find the best rental properties across India with ease.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Properties</p>
            <p>Dashboard</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>📧 support@houserent.com</p>
            <p>📞 +91 9876543210</p>
          </div>
        </div>
        <hr className="bg-light"/>
        <p className="text-center mb-0">
          © 2026 House Rent Management System | SmartBridge Internship Project
        </p>
      </div>
    </footer>
  );
}

export default Footer;