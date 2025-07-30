import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Metho <span style={{color: "orangered",}}>Vojanalaya</span></h1>
        </div>
        <div className="link">
          <Link to="/" className="link-items">Home</Link>
          <Link to="/contact" className="link-items">Contact</Link>
          <Link to="/menu" className="link-items">Menu</Link>
        </div>
      </nav>
    </>
  );
}
