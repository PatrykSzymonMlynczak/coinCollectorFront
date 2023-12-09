import React, { useState } from "react";
import PropTypes from "prop-types";

const DebtInput = ({setDebt, payDebt, personName}) => {
  const [debtInput, setDebtInput] = useState("");

  const handleOnChangeDebtInput = (e) => {
    setDebtInput(e.target.value);
  };

  const handleSetDebt = () => {
    return setDebt(personName, debtInput); 
  }
  const handlePayDebt = () => {
    return payDebt(personName, debtInput);
  }

  return (
    <div style={updatingDebtStyle}>
      <input
        style={{
          padding: "2px",
          backgroundColor: "#e2b54b",
          width: "30%",
          margin: "0px 0px",
        }}
        type="number"
        onChange={handleOnChangeDebtInput}
        value={debtInput}
      />
      <button name="payDebt"
        style={{
          padding: "8px",
          margin: "6px 20px",
          backgroundColor: "#976830",
        }}
        onClick={handlePayDebt}
      >
        Dodaj do długu
      </button>
      <button name="setDebt"
        style={{
          padding: "2px",
          margin: "0px 20px",
          backgroundColor: "#976830",
        }}
        onClick={handleSetDebt}
      >
        Ustaw dług
      </button>
    </div>
  );
};

const updatingDebtStyle = {
  display: `flex`,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: `center`,
  padding: "1px 0px",
};

const UsersList = ({ users, deleteUser, setDebt, payDebt }) => {
  const [personToDebtUpdate, setPersonToDebtUpdate] = useState("");

  const handleDebtInput = (name, isChosenPerson) => {
    if (!isChosenPerson) {
      setPersonToDebtUpdate(name);
    } else {
      setPersonToDebtUpdate("");
    }
  };

  const handleDeletePerson = (name) => {
    return deleteUser(name);
  };

  const userNames = users.map(({ name, debt }) => {
    const isChosenPerson = name === personToDebtUpdate;

    return (
      <div
        key={name}
        style={
          isChosenPerson
            ? personListStyles.chosenPerson
            : personListStyles.listItem
        }
      >
        <div style={personListStyles.itemValues}>
          <span style={personListStyles.personNameSpan}>{name}</span>
          <span style={personListStyles.debtValueSpan}>Dług: {debt} </span>
        </div>
        {isChosenPerson && (
          <div>
            <DebtInput personName={personToDebtUpdate} setDebt={setDebt} payDebt={payDebt} />
          </div>
        )}
        <div style={personListStyles.itemButtons}>
          <button
            style={{
              margin: "5px 10px",
              padding: "3px",
              border: "none", //`linear-gradient(45deg, green, orange)`,// "4px solid green",
              borderRadius: "10px",
              height: "40px",
              width: "100px",
              color: "#513010",
              fontWeight: "bold",
              //backgroundColor: "yellow",
              //background: `linear-gradient(45deg, green, orange)` /* Gradient od zielonego do pomarańczowego */,
              background: `radial-gradient(circle, #e0b03e, #61380f)`,
            }}
            onClick={() => handleDebtInput(name, isChosenPerson)}
          >
            {isChosenPerson ? "Zwiń okno" : "Obsłuż Dług"}
          </button>
          <button
            style={deleteUserButtonStyle}
            onClick={() => handleDeletePerson(name)}
          >
            X
          </button>
        </div>
      </div>
    );
  });
  return (
    <div
      style={{
        alignItems: "flex-center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ul style={{ display: "block" }}>{userNames}</ul>
    </div>
  );
};

const personListStyles = {
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 100px", //powiekszenie tego skutkuje zmniejszeniem elementu
    padding: "20px",
    border: "1px solid #666",
    borderRadius: "5px",
    background: `linear-gradient(45deg, #61380f, #e0b03e )`,
  },
  chosenPerson: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-evenly",
    margin: "10px 10px",
    padding: "10px",
    border: "none", // "1px solid #111",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    background: `linear-gradient(45deg, #662222, #997700)`,
  },
  itemValues: {
    display: "flex",
    flexDirection: "column", // Ustawienie kolumnowo
    alignItems: "flex-start", // Wyrównanie do lewej
    marginRight: "10px",
  },
  personNameSpan: {
    display: "flex",
    fontSize: "20px",
    fontWeight: "bold",
    alignItems: "flex-center",
    marginBottom: "5px", // Odstęp pomiędzy personName a debt
    marginLeft: "5px",
  },
  debtValueSpan: {
    marginLeft: "5px", // Odstęp pomiędzy personName a debt
  },
  itemButtons: {
    display: "flex",
  },
};

const deleteUserButtonStyle = {
  display: `inline-block`,
  padding: `6px 9px`,
  fontSize: `20px`,
  textAlign: `center`,
  textDecoration: `none`,
  border: `none`,
  borderRadius: `8px`, // zaokrągla rogi
  cursor: `pointer`,
  color: `#111`,
  margin: `5px 10px`,
  background: `linear-gradient(45deg, #cf5c0c, #913e22)` /* Gradient od zielonego do pomarańczowego */,
};

//sprawdzenie czy w propie jest tablica z odpowiednimi elementami i czy typy sa poprawne
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      debt: PropTypes.number.isRequired,
    })
  ).isRequired,
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
