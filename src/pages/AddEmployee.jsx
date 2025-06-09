import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation block here (inside function)
    if (!formData.name || !formData.email) {
      alert("Name and Email are required.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    onAddEmployee(newEmployee);
    navigate("/"); // Navigate back to the employee list
  };

  return (
    <div>
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" value={formData.name} />
        <input name="title" onChange={handleChange} placeholder="Title" value={formData.title} />
        <input name="salary" onChange={handleChange} placeholder="Salary" value={formData.salary} />
        <input name="phone" onChange={handleChange} placeholder="Phone" value={formData.phone} />
        <input name="email" onChange={handleChange} placeholder="Email" value={formData.email} />
        <input name="animal" onChange={handleChange} placeholder="Animal" value={formData.animal} />
        <input name="startDate" onChange={handleChange} placeholder="Start Date" value={formData.startDate} />
        <input name="location" onChange={handleChange} placeholder="Location" value={formData.location} />
        <input name="department" onChange={handleChange} placeholder="Department" value={formData.department} />
        <input name="skills" onChange={handleChange} placeholder="Skills (comma-separated)" value={formData.skills} />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
