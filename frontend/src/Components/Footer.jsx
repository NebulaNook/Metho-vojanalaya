import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <hr  style={{marginTop: "20px",
          border: "1px solid orangered",
        }}/>
        <div className="footer-items">
          <p style={{fontWeight: "bold",}}>
            &copy; 2025 Metho
            <span style={{ color: "orangered" }}>Vojanalaya</span>. All rights
            reserved
          </p>
        </div>
        <div className="footer-links" style={{marginBottom: "10px",}}>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/menu" className="footer-link">
            Menu
          </Link>
        </div>
      </div>
    </>
  );
}
