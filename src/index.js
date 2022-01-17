import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { buttonText, reset } = props;

  return (
    <button onClick={reset}> 
      {buttonText}
    </button>
  )
};

const Application = () => {

  const reset = () => {
    console.log("reset");
    // your code here
  };
  
  const [name, setName] = useState("Bita");


  return (
    <main>
      <Button reset={reset} buttonText="Reset" />
      <h1>Hello {name} </h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
