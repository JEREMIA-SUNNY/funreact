import React, { useState } from "react";
import ReactDOM from 'react-dom';
const Squre = () => {
  const [shapecs, setShape] = useState({
    shape: "squre",
  });
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [shapes2,setShapes2]=useState("");
  function changed(e) {
    const { name, value } = e.target;
    setShape((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  function clicked() {
    if (shapecs.shape === "") {
    } else {
      setCount((prev) => prev + 1);
      const values=shapecs.shape
      setShapes2(values)
      setArr((prev) => [...prev, count]);
      const title = React.createElement('h1', {}, 'My First React Code');
    }
  }
  console.log(arr);

  return (
    <div className="main">
      <select
        className="btn"
        name="shape"
        value={shapecs.shape}
        onChange={changed}
      >
        <option value="squre">squre</option>
        <option value="circle">circle</option>
      </select>
      <button onClick={clicked} className="btn">
        Create
      </button>
      <ul>{arr.map((elem, ind) => {
        if (shapes2 === "squre") {
          return <li className="squre" key={ind}>{elem}</li>;
        } else {
          return <li className="circle" key={ind}>{elem}</li>;
        }
      })}</ul>
    </div>
  );
};

export default Squre;
