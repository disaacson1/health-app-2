'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";

const Express = () => {
    const [display, setDisplay] = useState()
    const [input, setInput] = useState()

    const handleArrayClick = () => {
        axios.get('http://localhost:3001/array')
  .then(function (response) {
    // handle success
    console.log(response);
    setDisplay(response.data)
    console.log(display)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }

    const handlePopClick = () => {
        axios.put('http://localhost:3030/pop')
        .then(function (response) {
          // handle success
          console.log(response);
          setDisplay(response.data)
          console.log(display)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    const handleAddClick = () => {
        axios.put('http://localhost:3001/add', {number: input})
        .then(function (response) {
          // handle success
          console.log(response);
          setDisplay(response.data)
          console.log(display)
          setInput('')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div>
            <div><button onClick={handleArrayClick}>get array</button></div>
            <div><button onClick={handlePopClick}>pop array</button></div>
            <div><input onChange={handleChange} value={input}/><button onClick={handleAddClick}>add array</button></div>
            <div>{display}</div>
        </div>
    )
}

export default Express;