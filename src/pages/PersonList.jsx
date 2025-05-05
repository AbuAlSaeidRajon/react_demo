import React from "react";

const PersonList = ({ employees }) => {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;