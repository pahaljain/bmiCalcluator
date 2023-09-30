import React, { useState } from 'react'

function Box() {
    const [bmi , setBmi] = useState(0);

    const solve = () => {
        const w = document.getElementById("weight").value;
        const h = document.getElementById("height").value / 100;

        // console.log(w);
        const ans = w / (h * h);

        setBmi(ans.toFixed(2));
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
    }

  return (
    <div className='box'>
        <form action="">
            <input type="number" name="height" id='height' required placeholder='Enter your height in meters' />
            <input type="number" name="weight" id='weight' required placeholder='Enter your weight in kg' />
            <button type='submit' className='btn' onClick={solve}>Calculate BMI</button>
        </form>

        <h2>Your BMI is : {bmi} </h2>
    </div>
  )
}

export default Box