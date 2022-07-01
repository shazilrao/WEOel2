import "./component.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfCar, setListOfCar] = useState([]);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3003/.getCar").then((response) => {
      setListOfCar(response.data);
    });
  }, []);

  const addCar = () => {
    Axios.post("http://localhost:3003/addCar", {
        name:name,
        detail:detail,
        price:price,
    }).then((response) => {
      setListOfCar([
        ...listOfCar,
        {
          name:name,
          detail:detail,
          price:price,
        },
      ]);
    });
  };

  return (
    <div className="App">
      

      <div>
      <input
          type="number"
          placeholder="Price"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Detail"
          onChange={(event) => {
            setDetail(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button onClick={addCar}>Add Car</button>
        
      </div><br></br>
      <div className="carDisplay">
        {listOfCar.map((car) => {
          return (
            <div>
              
              <h2>Name: {car.name}</h2>
              <h2>detail: {car.detail}</h2>
              <h2>price: {car.price}</h2>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default App;