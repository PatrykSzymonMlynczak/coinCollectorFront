import React, { useEffect, useState } from "react";
import axios from "axios";

import AddPerson from "./AddPerson";
import UsersList from "./UsersList";

const personPageStyle = {
  display: "flex",
  //  justifyContent: 'center', //wysrodkowuje w pionie
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  height: "100vh", // Opcjonalnie - ustaw wysokość kontenera na całą wysokość ekranu
 // background: `radial-gradient(circle, #e0b03e, #61380f)`,
};

const Person = () => {
  const [users, setUsers] = useState(null);

  const setDebt = async (personName, debt) => {
    try {
      await axios.put(`/person/updateDebt/${personName}/${debt}`);

      const userIndex = users.findIndex((user) => user.name === personName);
      const updatedUsers = [...users];
      if (userIndex !== -1) {
        updatedUsers[userIndex].debt = debt;
        setUsers(updatedUsers);
      }

      console.log(`Updated person : ${personName} debt: ${debt}`);
    } catch (error) {
      console.error(`Error updating user: ${personName} debt`, error);
    }
  };

  const payDebt = async (personName, debt) => {
    try {
      await axios.put(`/person/payDebt/${personName}/${debt}`);

      const userIndex = users.findIndex((user) => user.name === personName);
      const updatedUsers = [...users];
      if (userIndex !== -1) {
        updatedUsers[userIndex].debt =
          parseInt(updatedUsers[userIndex].debt) - parseInt(debt);
        setUsers(updatedUsers);
      }

      console.log(`Payed person : ${personName} debt: ${debt}`);
    } catch (error) {
      console.error(`Error paying user: ${personName} debt`, error);
    }
  };

  const deleteUser = async (personName) => {
    try {
      await axios.delete(`/person/${personName}`);
      setUsers((users) => users.filter((user) => user.name !== personName));
    } catch (error) {
      console.error(`Error deleting user: ${personName}`, error);
    }
  };

  const addPerson = async (personName) => {
    try {
      await axios.post(`/person/${personName}`);
      setUsers((users) => [...users, { name: `${personName}`, debt: 0 }]);
      //fetchData(); nieoptymalnie było by to pobierac bez sensu
      console.log(`Added person : ${personName}`);
    } catch (error) {
      console.error(`Error adding user: ${personName}`, error);
    }

    //todo - alert ze user juz istnieje
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/person");
      setUsers(response.data);
      console.log(`Fetched from server ${response.data.length} persons`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Pusty [] oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  return (

    <div style={personPageStyle}>
      <h1>Person Page</h1>
      <AddPerson add={addPerson} />
      {users ? (
        <UsersList
          users={users}
          deleteUser={deleteUser}
          payDebt={payDebt}
          setDebt={setDebt}
        />
      ) : (
        users
      )}
    </div>
    
  );
};

export default Person;
