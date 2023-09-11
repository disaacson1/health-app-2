import React from "react";

const Biceps = () => {
    return (
        <div  className="Biceps-all">
                
            <div className="header"><h1>Biceps</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Machine Curl: 4 Sets: 12/18/15/F</li>
            <li>Hammer Curls: 5 Sets: 10/15/20/12/F</li>
            <li>Barbell Curls: 4 Sets: 12/15/12/F</li>
            <li>Cable Curls: 3 Sets: F/F/F</li>
            <li>Banded Curls: 4 Sets: 25/25/25/25</li>
            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://t4.ftcdn.net/jpg/01/10/74/03/360_F_110740333_xtBlkKYC6AcG9VGD0QfP4hPdsN9e1blp.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets</li>
           <li>Really focus on finding the mind-to-muscle connection, if needed close your eyes on your sets to visualize</li>
           <li>Do your best to keep your rest time inbetween sets to less than 60sec</li>
           <li>Reps need to be slow, 3-4sec up, 2 sec squeeze/flex, 3-4sec down</li>
           </div>

           </div>
        
        </div>
    )
}

export default Biceps;