import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ name }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h2>{name}</h2>
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;