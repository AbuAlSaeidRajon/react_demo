import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BookList from "./Books/BookList";

const App = () => {
  return (
    <>
      <Header name="Rajon Al Saeid" />
      <main>
        <BookList />
      </main>
      <Footer year={2025} />
    </>
  );
};

export default App;
