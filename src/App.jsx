import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useAxios from "./hooks/useAxios";

import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BookList";
import AddEmployee from "./pages/AddEmployee";
import PersonList from "./pages/PersonList";
import Home from "./pages/Home";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const { get, post } = useAxios();

  const fetchEmployees = async () => {
    try {
      const res = await get("/employees");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddEmployee = async (newEmployee) => {
    try {
      await post("/employees", newEmployee);
      fetchEmployees(); // Refresh after adding
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/books", element: <BookList /> },
        {
          path: "/add-employee",
          element: <AddEmployee onAddEmployee={handleAddEmployee} />
        },
        {
          path: "/person-list",
          element: <PersonList employees={employees} setEmployees={setEmployees} />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
