import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Metho Vojanalaya</h1>
        </div>
        <div className="link">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </nav>
    </>
  );
}
