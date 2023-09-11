import React from "react";

const Back = () => {
    return (
        <div  className="back-all">
                
            <div className="header"><h1>Back</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Assisted Pull-Ups: 4 Sets: 10/12/10/8</li>
            <li>Seated Cable Rows: 4 Sets: 15/12/10/F</li>
            <li>Lat Pull-Downs: 5 Sets: 20/15/12/10/F</li>
            <li>Bent Over Rows: 3 Sets: 15/15/F</li>
            <li>Single Arm Rows: 3 Sets: 12/12/F</li>
            <li>Row Machine: 10 Minutes</li>
            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://trifocusfitnessacademy.co.za/wp-content/uploads/2019/12/shutterstock_427394194-600x439.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets</li>
           <li>Really focus on finding the mind-to-muscle connection</li>
           <li>The back is a really big muscle, work on learning what movmenet works which muscle</li>
           <li>With every rep, really focus on squeezing/pulling the weight all the way to your chest, so your back fully flexes/extends</li>
           <li>Keep your rest time inbetween sets to 60 sec</li>
           </div>

           </div>
        
        </div>
    )
}

export default Back;