"use client"
import { useState } from "react";

const AppCostCalculator = () => {
  const [platform, setPlatform] = useState("ios");
  const [screens, setScreens] = useState(5);
  const [features, setFeatures] = useState([]);
  const [cost, setCost] = useState(0);

  const platformOptions = [
    { label: "iOS", value: "ios", price: 3000 },
    { label: "Android", value: "android", price: 3000 },
    { label: "Both", value: "both", price: 5000 },
  ];

  const featureOptions = [
    { label: "User Authentication", value: "auth", price: 220 },
    { label: "Push Notifications", value: "push", price: 180 },
    { label: "Payments", value: "payments", price: 400 },
    { label: "API Integration", value: "api", price: 320 },
    { label: "Chat/Messaging", value: "chat", price: 350 },
    { label: "Social Login", value: "social", price: 200 },
    { label: "Maps Integration", value: "maps", price: 250 },
    { label: "Camera Access", value: "camera", price: 170 },
    { label: "File Upload", value: "upload", price: 160 },
    { label: "Multi-language", value: "multilang", price: 300 },
    { label: "Custom Animation", value: "animation", price: 190 },
  ];

  const calculateCost = () => {
    let total = platformOptions.find(p => p.value === platform)?.price || 0;
    total += screens * 200;
    total += features.reduce((sum, f) => {
      const opt = featureOptions.find(o => o.value === f);
      return sum + (opt ? opt.price : 0);
    }, 0);
    setCost(total);
  };

  return (
    <div className={`pricing-item style-three`}>
      <h4 className="title mb-3">Mobile App Project Cost Estimator</h4>
      <div className="text mb-4">Get an instant estimate for your custom mobile application development project.</div>
      <div className="included mb-2">Options:</div>
      <ul className="list-style-one mb-4">
        <li>
          <label>Platform
            <select value={platform} onChange={e => setPlatform(e.target.value)} className="form-control d-inline-block ms-2">
              {platformOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </li>
        <li>
          <label>Number of Screens
            <input type="number" min={1} max={50} value={screens} onChange={e => setScreens(Number(e.target.value))} className="form-control d-inline-block w-24 ms-2" />
          </label>
        </li>
        <li>
          <label>Features:</label>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {featureOptions.map(opt => (
              <label key={opt.value} className="me-3">
                <input
                  type="checkbox"
                  checked={features.includes(opt.value)}
                  onChange={e => {
                    if (e.target.checked) setFeatures([...features, opt.value]);
                    else setFeatures(features.filter(f => f !== opt.value));
                  }}
                /> {opt.label} (+${opt.price})
              </label>
            ))}
          </div>
        </li>
      </ul>
      <button className="theme-btn mt-2" onClick={calculateCost}>Calculate</button>
  <div className="mt-4 price text-lg font-semibold"><span style={{display:'block',marginBottom:'6px'}}>Estimated </span><br />
  Cost: ${cost}</div>
    </div>
  );
};

export default AppCostCalculator;
