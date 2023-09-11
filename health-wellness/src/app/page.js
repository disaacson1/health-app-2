import Link from "next/link"
import Card from "./card/Card"
import Card2 from "./card/Card2"


export default function Home() {
  return (
    <div className="main">
      {/* <div className="workout-header"><Link href='workout'>Create Workout</Link></div> &nbsp; */}
      <div><Card /></div> &nbsp;
      {/* <div className="progress-header"><Link href='progress'>Progress Tracker</Link></div> &nbsp; */}
      <div className="macro-header"><Card2 /></div> &nbsp;
      {/* <div className="card-header"><Link href='card'>Card Build</Link></div> &nbsp; */}
    </div>
  )
};
