import React,{ useState} from "react";

const MultiplicableInput = ({onInputChange}) => {
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const numberPattern = /^(?:[1-9]|[1-9][0-9]{1,2}|1000)$/;
  
    const handleOnChangeQuantity = (e) => {
      const newQuantity = e.target.value;
      setQuantity(newQuantity);
      onInputChange({ quantity: newQuantity, price });
    };
  
    const handleOnChangePrice = (e) => {
      const newPrice = e.target.value;
      setPrice(newPrice);
      onInputChange({ quantity, price: newPrice });
    };
  
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginBottom: "10px",
        backgroundColor: "#e2b54b",
        borderRadius: "15px",
        padding: "5px 50px",
        color: "#6b320b",
        fontWeight: "bold",
        textAlign: "center",
      }}>
        <input
          type="text"
          pattern={numberPattern}
          onChange={handleOnChangeQuantity}
          value={quantity}
          style={{maxWidth: "30px"}}
        ></input>
        <input
          type="text"
          pattern={numberPattern}
          onChange={handleOnChangePrice}
          value={price}
          style={{maxWidth: "50px"}}
        ></input>
      </div>
    );
  };

  export default MultiplicableInput;