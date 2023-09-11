import Link from "next/link";
import React from "react";

const Card2 = () => {
    return (
        <div className="twofront-cardWrapper">
           <div className="twofront-card">
  <div className="twofront-card-info">
    <div className="twofront-text-title">Add New Macros</div>
  </div>
  <div className="twofront-card-footer"></div>
  <div className="twofront-text-body">&nbsp;  Found a new food to try? GREAT! Click to add the nutritional values.</div>
  <div ><Link href='macros'><button className="twofront-card-button">ADD</button></Link></div>
</div>
        </div>
    )
}

export default Card2;