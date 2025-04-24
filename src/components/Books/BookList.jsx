import { useState } from "react";
import { books } from "../../data/booksData"; // Adjusted path
import BookCard from "./BookCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BookList = () => {
  const [booksData, setBooksData] = useState(books);
  const [searchValue, setSearchValue] = useState("");

  const eventHandler = (id) => {
    console.log("See more button clicked for book ID:", id);
  };

  const toggleStock = (id) => {
    const updatedArray = booksData.map((book) =>
      book.id === id ? { ...book, inStock: !book.inStock } : book
    );
    setBooksData(updatedArray);
  };

  const toggleFavorite = (id) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  const handlePriceChange = (id, newPrice) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, price: parseFloat(newPrice) } : book
      )
    );
  };

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredBooks = booksData.filter((book) => {
    const search = searchValue.toLowerCase();
    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });

  return (
    <><Header name="Rajon Al Saeid" />
    <div className="books" style={{marginTop: 10}}>
      <h1>Books Catalog</h1>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchValue}
        onChange={searchHandle}
        placeholder="Search books..."
      />
      <div className="boxes">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onEventHandler={() => eventHandler(book.id)}
              onToggleStock={toggleStock}
              onToggleFavorite={() => toggleFavorite(book.id)}
              onPriceChange={handlePriceChange}
            />
          ))
        ) : (
          <p>No books found for "{searchValue}".</p>
        )}
      </div>
    </div>
    <Footer year={2025} />
    </>
  );
};

export default BookList;