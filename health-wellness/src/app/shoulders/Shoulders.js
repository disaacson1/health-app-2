import React from "react";

const Shoulders = () => {
    return (
        <div  className="Shoulders-all">
                
            <div className="header"><h1>Shoulders</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Reverse Pec Deck: 4 Sets: 20/20/20/F</li>
            <li>Seated Military Press: 5 Sets: 20/15/12/8/F</li>
            <li>Dumbell Side Lateral Flys: 4 Sets: 20/15/12/F </li>
            <li>Upright Barbell Rows: 3 Sets: F/F/F</li>
            <li>Banded Raises 3 Sets: F/F/F</li>
            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://cdn.w600.comps.canstockphoto.com/shoulders-anatomy-muscles-clip-art_csp14778427.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets</li>
           <li>Really focus on finding the mind-to-muscle connection, if needed close your eyes on your sets to visualize</li>
           <li>Do your best to keep your rest time inbetween sets to less than 60sec</li>
           <li>Really focus on controlling the press up, squeeze at the top, and slowly restrict the wieght as you lower it</li>
           </div>

           </div>
        
        </div>
    )
}

export default Shoulders;