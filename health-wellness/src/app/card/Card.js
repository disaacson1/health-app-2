import Link from "next/link";
import React from "react";

const Card = () => {
    return (
        <div className="front-cardWrapper">
           <div className="front-card">
  <div className="front-card-info">
    <div className="front-text-title">Build Your Meal</div>
  </div>
  <div className="front-card-footer"></div>
  <div className="front-text-body">&nbsp;  Pick your Protein option and your Carb option. You'll see the macros for the meal you created.</div>
  <div ><Link href='meal'><button className="front-card-button">CREATE</button></Link></div>
</div>
        </div>
    )
}

export default Card;