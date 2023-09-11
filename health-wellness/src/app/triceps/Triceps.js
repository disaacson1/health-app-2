import React from "react";

const Triceps = () => {
    return (
        <div  className="Triceps-all">
                
            <div className="header"><h1>Triceps</h1></div>
        <div className="container">
            
        <div className="column1"><h2 >Workout Plan:</h2>
            <ul>
            <li>Cable Push-Downs: 4 Sets: 12/15/20/12</li>
            <li>Tricep Kick-Backs: 5 Sets: 10/12/15/15/F</li>
            <li>Skull Crushers: 4 Sets: 12/15/18/F</li>
            <li>Seated dumbell extensions: 3 Sets: 15/20/15</li>
            <li>Single arm cable pushdowns: 3 Sets: F/F/F</li>
            </ul>
        </div>

           <div className="column2"> <h2>Anatomy</h2> 
           <img className="pic" src='https://www.mz-store.com/blog/wp-content/uploads_en/2018/11/triceps1.jpg'></img></div>

           <div  className="column3"> <h2>Tips:</h2>
           <li>For your first Workout, stretch inbetween sets</li>
           <li>Really focus on finding the mind-to-muscle connection, if needed close your eyes on your sets to visualize</li>
           <li>Do your best to keep your rest time inbetween sets to less than 60sec</li>
           <li>Reps need to be slow, 2-3sec up, 1 sec squeeze/flex, 2-3sec down</li>
           </div>

           </div>
        
        </div>
    )
}

export default Triceps;