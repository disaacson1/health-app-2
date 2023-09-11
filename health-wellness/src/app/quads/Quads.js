import React from "react";

const Quads = () => {
    return (
        <div  className="quads-all">
            <div></div>
                
            <div className="header"><h1>Quads</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Leg Extensions: 4 Sets: 20/30/40/20</li>
            <li>Hack Squat: 5 Sets: 15/20/25/20/F</li>
            <li>Bulgarian Split Squats: 4 Sets: 10/10/10/10 each leg </li>
            <li>Heel Elevated Squats: 3 Sets: 15/15/F</li>
            <li>Assault Bike: 5 minutes</li>

            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://www.shutterstock.com/image-illustration/quadriceps-male-muscles-anatomy-muscle-600w-489727177.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets, stretch your hips as well as quads</li>
           <li>Really focus on finding the mind-to-muscle connection, if needed close your eyes on your sets to visualize</li>
           <li>Quads are a muscle we can really over work and abuse, stay smart but get uncomfortable</li>
           <li>Do your best to keep your rest time inbetween sets to less than 90sec</li>
           <li>For Heel elevated squats, stand on a 25lb plate</li>
           </div>

           </div>
        
        </div>
    )
}

export default Quads;