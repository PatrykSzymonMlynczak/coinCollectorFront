import React, { useState } from "react";

const AddPerson = ({ add }) => {
  const [personName, setPersonName] = useState("");

  const handleSetPersonName = (e) => {
    setPersonName(e.target.value);
  };

  const addPerson = () => {
    return add(personName);
  };

  return (
    <div
      style={{
        alignItems: "flex-center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        style={{
          backgroundColor: "#e2b54b",
          borderRadius: "15px",
          padding: "5px 50px",
          color: "#6b320b",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
        }}
        type="text"
        onChange={handleSetPersonName}
        value={personName}
      />
      <button style={{
          backgroundColor: "#c59626",
          borderRadius: "25px",
          padding: "15px 20px",
          color: "#6b320b",
          letterSpacing: "4spx",
          fontSize: "1em",
        }}
         onClick={addPerson}>Dodaj Klienta</button>
    </div>
  );
};

export default AddPerson;
