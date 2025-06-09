import React from "react";
import PersonCard from "../components/Person/PersonCard";

const PersonList = ({ employees, setEmployees }) => {
  const updateEmployee = (updatedEmp) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp))
    );
  };

  return (
    <div>
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <PersonCard
            key={employee.id}
            employee={employee}
            onUpdate={updateEmployee}
          />
        ))
      )}
    </div>
  );
};

export default PersonList;
