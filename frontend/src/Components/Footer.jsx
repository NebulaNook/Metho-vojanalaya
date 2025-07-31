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
        <div className="link" style={{marginBottom: "10px",}}>
          <Link to="/" className="link-items">
            Home
          </Link>
          <Link to="/contact" className="link-items">
            Contact
          </Link>
          <Link to="/menu" className="link-items">
            Menu
          </Link>
        </div>
      </div>
    </>
  );
}
