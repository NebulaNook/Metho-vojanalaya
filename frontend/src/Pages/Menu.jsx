import { useState } from "react";
import FoodData from "../FoodData";
export default function Menu() {
  const [currentTime, setCurrentTime] = useState("morning");

  return (
    <>
      <div className="container">
        <h1>What's Cooking Todays?</h1>
        <div className="btn-time">
          <button
            className={currentTime === "morning" ? "active" : ""}
            onClick={() => setCurrentTime("morning")}
          >
            Morning
          </button>
          <button
            className={currentTime === "day" ? "active" : ""}
            onClick={() => setCurrentTime("day")}
          >
            Day
          </button>
          <button
            className={currentTime === "night" ? "active" : ""}
            onClick={() => setCurrentTime("night")}
          >
            Night
          </button>
        </div>
        <div className="menu-data">
          {FoodData[currentTime].map((data) =>(
            <div key={data.id} className="card">
              <h3>{data.name}</h3>
              <h3>{data.price}</h3>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}
