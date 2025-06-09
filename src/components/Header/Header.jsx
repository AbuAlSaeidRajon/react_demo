// Header.jsx
import "./Header.css";

const Header = ({ name }) => {
  return (
    <header className="main-header">
      <h1>{name}'s Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/about">About</a>
        <a href="/add-employee">Add Employee</a>
        <a href="/person-list">Employee List</a>
      </nav>
    </header>
  );
};

export default Header;
