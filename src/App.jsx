import React, { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BookList";
import AddEmployee from "./pages/AddEmployee";
import PersonList from "./pages/PersonList";
import Home from "./pages/Home";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3001/employees");
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
      await axios.post("http://localhost:3001/employees", newEmployee);
      fetchEmployees(); // or push to state if you want performance
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
          element: <PersonList
            employees={employees}
            setEmployees={setEmployees}
          />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
