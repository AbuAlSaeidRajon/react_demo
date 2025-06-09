import React, { useState } from "react";
import axios from "axios";

const PersonCard = ({ employee, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    salary: employee.salary,
    location: employee.location,
    department: employee.department,
    skills: employee.skills.join(", "),
  });
  const [savedMessage, setSavedMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const updatedEmployee = {
        salary: Number(editedData.salary),
        location: editedData.location,
        department: editedData.department,
        skills: editedData.skills.split(",").map((s) => s.trim()),
      };

      const res = await axios.patch(
        `http://localhost:3001/employees/${employee.id}`,
        updatedEmployee
      );

      onUpdate(res.data); // Update state in parent
      setSavedMessage("✔ Saved!");
      setEditMode(false);

      setTimeout(() => setSavedMessage(""), 2000); // Clear message after 2s
    } catch (error) {
      console.error("Failed to update employee", error);
    }
  };

  const handleCancel = () => {
    setEditedData({
      salary: employee.salary,
      location: employee.location,
      department: employee.department,
      skills: employee.skills.join(", "),
    });
    setEditMode(false);
  };

  return (
    <div className="employee-card">
      <h3>{employee.name} ({employee.title})</h3>

      {editMode ? (
        <>
          <p>Salary: <input name="salary" type="number" value={editedData.salary} onChange={handleChange} /></p>
          <p>Location: <input name="location" value={editedData.location} onChange={handleChange} /></p>
          <p>Department: <input name="department" value={editedData.department} onChange={handleChange} /></p>
          <p>Skills: <input name="skills" value={editedData.skills} onChange={handleChange} /></p>

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Salary: {employee.salary}</p>
          <p>Location: {employee.location}</p>
          <p>Department: {employee.department}</p>
          <p>Skills: {employee.skills.join(", ")}</p>

          <button onClick={() => setEditMode(true)}>Edit</button>
          {savedMessage && <span className="saved-msg">{savedMessage}</span>}
        </>
      )}
    </div>
  );
};

export default PersonCard;
