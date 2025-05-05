import { Outlet } from "react-router-dom"; // Import Outlet to display child routes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Root.css";

const Root = () => {
  return (
    <>
      <Header name="Rajon Al Saeid" />
      <main className="root-main">
        <Outlet /> {/* Only renders the child route content */}
      </main>
      <Footer year={2025} />
    </>
  );
};

export default Root;