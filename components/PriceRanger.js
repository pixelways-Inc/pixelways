"use client";
import { useState } from "react";

const PriceRanger = () => {
  const minValue = 56;
  const maxValue = 1578;

  const [max, setMax] = useState(789);

  const handleChange = (e) => {
    setMax(Number(e.target.value));
  };

  const percentage = ((max - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="price-ranger">
      <div className="slider-container">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={max}
          onChange={handleChange}
          className="thumb"
        />
        <div className="slider-track" />
        <div className="slider-range" style={{ width: `${percentage}%` }} />
      </div>

      <div className="ranger-min-max-block pt-2">
        <span>Price</span> <span className="min">${minValue}</span>{" "}
        <span>-</span>
        <span className="max">${max}</span>
      </div>
    </div>
  );
};

export default PriceRanger;
