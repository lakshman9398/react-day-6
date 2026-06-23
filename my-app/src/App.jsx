import React, { createContext, useContext, useState } from "react";

// Create Context
const EmployeeContext = createContext();

// Employee Details Component
function EmployeeDetails() {
  const { employee } = useContext(EmployeeContext);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Employee Details</h2>

      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Status:</strong> {employee.status}</p>
    </div>
  );
}

// Employee Status Component
function EmployeeStatus() {
  const { employee } = useContext(EmployeeContext);

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Employee Status</h2>

      <h3>
        {employee.name || "Employee"} is{" "}
        <span
          style={{
            color: employee.status === "Active" ? "green" : "red",
          }}
        >
          {employee.status}
        </span>
      </h3>
    </div>
  );
}

// Employee Controls Component
function EmployeeControls() {
  const { employee, setEmployee } = useContext(EmployeeContext);

  const toggleStatus = () => {
    setEmployee({
      ...employee,
      status: employee.status === "Active" ? "Inactive" : "Active",
    });
  };

  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Employee Controls</h2>

      <button onClick={toggleStatus}>
        Change Status
      </button>
    </div>
  );
}

// Main App
function App() {
  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    department: "",
    status: "Active",
  });

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      <div
        style={{
          width: "600px",
          margin: "30px auto",
          padding: "20px",
          border: "2px solid gray",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Employee Dashboard
        </h1>

        <h2>Enter Employee Details</h2>

        <input
          type="text"
          placeholder="Employee Name"
          value={employee.name}
          onChange={(e) =>
            setEmployee({ ...employee, name: e.target.value })
          }
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <br />

        <input
          type="text"
          placeholder="Employee ID"
          value={employee.id}
          onChange={(e) =>
            setEmployee({ ...employee, id: e.target.value })
          }
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <br />

        <input
          type="text"
          placeholder="Department"
          value={employee.department}
          onChange={(e) =>
            setEmployee({
              ...employee,
              department: e.target.value,
            })
          }
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <EmployeeDetails />

        <EmployeeStatus />

        <EmployeeControls />
      </div>
    </EmployeeContext.Provider>
  );
}

export default App;