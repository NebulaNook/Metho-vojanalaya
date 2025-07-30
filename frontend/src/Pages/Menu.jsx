import React, { useState } from "react";
import foodData from "../FoodData";

const Menu = () => {
  const [currentTimeSlot, setCurrentTimeSlot] = useState("morning");

  return (
    <div className="container">
      <h1>What's Cooking today?</h1>
      <div className="tabs">
        {["morning", "day", "night"].map((slot) => (
          <button
            key={slot}
            onClick={() => setCurrentTimeSlot(slot)}
            style={{
              marginRight: 5,
              padding: "10px 15px",
              backgroundColor: currentTimeSlot === slot ? "#007bff" : "#eee",
              color: currentTimeSlot === slot ? "#fff" : "#000",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {slot.charAt(0).toUpperCase() + slot.slice(1)}
          </button>
        ))}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {foodData[currentTimeSlot].map((food, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
              borderBottom: "1px solid #ddd",
              paddingBottom: 10,
            }}
          >
            <img
              src={food.image}
              alt={food.name}
              style={{ width: 100, height: 100, borderRadius: 8, objectFit: "cover", marginRight: 20 }}
            />
            <div>
              <h3 style={{ margin: 0 }}>{food.name}</h3>
              <p style={{ margin: "5px 0 0" }}>{food.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
