"use client"
import React, {useState, useEffect} from "react"   
import Food from "./Food";
import axios from "axios";


const Meal = () => {
    const [proteins, setProtein] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [display, setDisplay] = useState()
    const [proteinObj, setProteinObj] = useState({})
    const [carbObj, setCarbObj] = useState({})
    const [calories, setCalories] = useState(0)
    const [fats, setFats] = useState(0)

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


    const handleProteinChange = (e) => {
        console.log(proteinObj)
        console.log(e.target.value)
        let proteinAmount = proteinObj[e.target.value]?.protein
        let carbAmount = proteinObj[e.target.value]?.carb
        let newProtein = proteins + proteinAmount
        let newCarb = carbs + carbAmount
        let fatAmount = proteinObj[e.target.value]?.fat
        let newFat = fats + fatAmount
        let calorieAmount = proteinObj[e.target.value]?.calorie
        let newCalorie = calories + calorieAmount
        setProtein(newProtein)
        setCarbs(newCarb)
        setFats(newFat)
        setCalories(newCalorie)
    }

    const handleCarbChange = (e) => {
        let proteinAmount = carbObj[e.target.value]?.protein
        let carbAmount = carbObj[e.target.value]?.carb
        let newProtein = proteins + proteinAmount
        let newCarb = carbs + carbAmount
        let fatAmount = carbObj[e.target.value]?.fat
        let newFat = fats + fatAmount
        let calorieAmount = carbObj[e.target.value]?.calorie
        let newCalorie = calories + calorieAmount
        setProtein(newProtein)
        setCarbs(newCarb)
        setFats(newFat)
        setCalories(newCalorie)
    }
    return (
        <div className="cm-cardWrapper">
           <div className="cm-card">
    <div className="cm-text-title">Create Your Meal </div>
    <div className="cm-card-footer"></div>
        <div className="cm-text-body"> 
            <Food handleChange={handleProteinChange} foodObj={proteinObj} />
            <Food handleChange={handleCarbChange} foodObj={carbObj} /> 
        </div>

  <div className="cm-text-main"> 
            <div>Protein: {proteins}(g)</div>
            <div>Carbs: {carbs}(g)</div>
            <div>Fats: {fats}(g)</div>
            <div>Calories: {calories}</div>
    </div>
</div>
        </div>
    )
}

export default Meal;