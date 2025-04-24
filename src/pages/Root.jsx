import { Outlet } from "react-router-dom"; // Import Outlet to display child routes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header name="Rajon Al Saeid" />
      <main>
      <p>This is the Root component</p>
        <Outlet /> {/* This renders the child route content */}
      </main>
      <Footer year={2025} />
    </>
  );
};

export default Root;