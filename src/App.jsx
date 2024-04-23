import React, { useState } from "react";
import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      We're Half way to the finish Line!!
    </h1>
  )
}

const Button = () => {
  const [count, setCount] = useState (0);
    
    const handleClick = () => {
      setCount(count + 1);
    }
    let color = "purple";
      if (count > 10) {
        color = 'red';
      } else if (count > 5) {
        color = 'yellow';
     }

    return (
      <div>
        <p style = {{ color }}> Count: {count} </p>
        {count > 10 &&<p>Stop That Clicking!</p>}
        <button onClick={handleClick}>Click me
        </button>
      </div>
    )
  }

  function App () {
  return (
    <div 
    className="bg-info h-100 p-5"
    style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>About</Link>
      <Link className="text-light" to='/contacts'>Contacts</Link>
      <Title />
      <Butt