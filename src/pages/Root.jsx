import { Outlet } from "react-router-dom"; // Import Outlet to display child routes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Root.css";


const Root = () => {
  return (
    <>
      <Header name="Rajon Al Saeid" />
      <main className="root-main">
        <section className="welcome-section">
          <h1>Welcome to My Website</h1>
          <p>
            Explore the site using the navigation menu above. You can visit the
            Home, Books, and About pages to learn more about what we do.
          </p>
        </section>
        <section className="links-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Go to Home</a>
            </li>
            <li>
              <a href="/books">Explore Books</a>
            </li>
            <li>
              <a href="/about">Learn About Us</a>
            </li>
          </ul>
        </section>
        <Outlet /> {/* This renders the child route content */}
      </main>
      <Footer year={2025} />
    </>
  );
};

export default Root;