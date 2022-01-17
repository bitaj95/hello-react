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
    setName(name = "");
  }
  
  const [name, setName] = useState("");


  return (
    <main>
      <input 
        value={name}
        onChange={ (event) => setName(event.target.value)}
        placeholder="Type Your Name"
        />
      <Button reset={reset} buttonText="Reset" />
      <h1>Hello {name} </h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
