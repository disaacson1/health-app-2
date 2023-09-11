import React from "react";

const Chest = () => {
    return (
        <div  className="chest-all">
                
            <div className="header"><h1>Chest</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Pec deck: 4 sets: 20/20/20/F</li>
            <li>Bench Press(Flat): 4 sets: 10/12/15/F</li>
            <li>Dumbell Press(Flat): 5 sets: 20/15/12/10/F</li>
            <li>Incline Bench Press: 4 sets: 15/10/8/F</li>
            <li>Push Ups: 2 or 3 sets to Failure</li>
            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://www.mz-store.com/blog/wp-content/uploads_en/2018/10/chest.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets</li>
           <li>Focus on the squeeze/flex on each rep, NOT THE WEIGHT!</li>
           <li>If you feel pressure in any other muscle, lower the weight and foucs on finding the mind to muscle connection</li>
           <li>Keep your rest time inbetween sets to 60 sec</li>
           </div>

           </div>
        
        </div>
    )
}

export default Chest;