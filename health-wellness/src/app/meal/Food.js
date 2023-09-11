"use client"
import React from "react";

const Food = ({foodObj, handleChange}) => {

const foodArray = Object.values(foodObj)

    return (
        <div>
            <select onChange={handleChange}>
                {foodArray.map((item) => {
                    return (
                        <option value={item?.foodKey}>{item?.name}</option>
                    )
                })}

            </select>
        </div>
    )
}


export default Food;