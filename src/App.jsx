import { createBrowserRouter, RouterProvider } from "react-router";
import React, { useState } from "react";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BookList";
import AddEmployee from "./pages/AddEmployee";
import PersonList from "./pages/PersonList";
import Home from "./pages/Home";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />, // Home is now its own component
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/books",
          element: <BookList />,
        },
        {
          path: "/add-employee",
          element: <AddEmployee onAddEmployee={handleAddEmployee} />,
        },
        {
          path: "/person-list",
          element: <PersonList employees={employees} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;