import React from "react";
import Link from "next/link";

const Workout = () => {
    return (
        <div className="Muscle-groups"> 
            <h1>Muscle Groups</h1>
            <div><Link href='chest'>Chest</Link></div>
            <div><Link href='back'>Back</Link></div> 
            <div><Link href='quads'>Quads</Link></div> 
            <div><Link href='hamstring'>Hamstring/Glutes</Link></div> 
            <div><Link href='biceps'>Biceps</Link></div> 
            <div><Link href='triceps'>Triceps</Link></div> 
            <div><Link href='shoulders'>Shoulders</Link></div> 
            <div><Link href='core'>Core</Link></div> 
            <div><Link href='stretches'>Stretches</Link></div>   
                   
        </div>
    )
}

export default Workout;