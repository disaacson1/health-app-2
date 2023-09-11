'use client'
import React, {useState, useEffect} from "react";
import axios from "axios";

const Macros = () => {
    const [foodKeyInput, setFoodKeyInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [proteinInput, setProteinInput] = useState('')
    const [carbInput, setCarbInput] = useState('')
    const [fatInput, setFatInput] = useState('')
    const [calorieInput, setCalorieInput] = useState('')
    const [typeInput, setTypeInput] = useState('')    

    useEffect(() => {
        axios.get('http://localhost:3030/all')
        .then(function (response) {
          // handle success
          console.log(response.data);
          let carbs = response.data.carbObj
          let proteins = response.data.proteinObj
          setCarbObj(carbs)
          setProteinObj(proteins)
          console.log(display)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])

    const handleAddClick = () => {
        let obj = {
            foodKey: foodKeyInput,
            name: nameInput,
            protein: proteinInput,
            carb: carbInput,
            fat: fatInput,
            calories: calorieInput,
            type: typeInput 
            }
        axios.put('http://localhost:3030/add', {input: obj})
        .then(function (response) {
          // handle success
          console.log(response);
          setProteinObj(response.data)
          console.log(display)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    const handleFoodKeyChange =(e) => {
        setFoodKeyInput(e.target.value)
    }
    const handleNameChange =(e) => {
        setNameInput(e.target.value)
    }
    const handleProteinInputChange =(e) => {
        setProteinInput(e.target.value)
    }
    const handleCarbInputChange =(e) => {
        setCarbInput(e.target.value)
    }
    const handleFatChange =(e) => {
        setFatInput(e.target.value)
    }
    const handleCalorieChange =(e) => {
        setCalorieInput(e.target.value)
    }
    const handleTypeChange =(e) => {
        setTypeInput(e.target.value)
    }


        return (
            <div className="cardWrapper">
               <div className="card">
      <div className="card-info">
        <div className="text-title">Add A New Food Item</div>
       
      </div>
      <div className="card-footer">
    </div>
    <div className="text-body">Nutritional Profile:</div>
      
      <div className="nutrition-add">
               <li><input placeholder="Food Key" value={foodKeyInput} onChange={handleFoodKeyChange}></input></li>
               <li><input placeholder="Name" value={nameInput} onChange={handleNameChange}></input></li>
               <li><input placeholder="Protein" value={proteinInput} onChange={handleProteinInputChange}></input></li>
               <li><input placeholder="Carb" value={carbInput} onChange={handleCarbInputChange}></input></li>
               <li><input placeholder="Fat" value={fatInput} onChange={handleFatChange}></input></li>
               <li><input placeholder="Calorie" value={calorieInput} onChange={handleCalorieChange}></input></li>
               <li><input placeholder="Type" value={typeInput} onChange={handleTypeChange}></input></li>
               
               <div><button className="card-button" onClick={handleAddClick}>SAVE</button></div>
               </div>
               </div>
            </div>
        )
    }


export default Macros;