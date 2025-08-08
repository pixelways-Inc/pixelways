"use client";
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
    { label: "User Authentication", value: "auth", price: 500 },
    { label: "Push Notifications", value: "push", price: 400 },
    { label: "Payments", value: "payments", price: 1000 },
    { label: "API Integration", value: "api", price: 1200 },
    { label: "Chat/Messaging", value: "chat", price: 1500 },
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
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">App Cost Calculator</h3>
      <div className="mb-4">
        <label className="block mb-2">Platform</label>
        <select value={platform} onChange={e => setPlatform(e.target.value)} className="border rounded px-2 py-1">
          {platformOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Number of Screens</label>
        <input type="number" min={1} max={50} value={screens} onChange={e => setScreens(Number(e.target.value))} className="border rounded px-2 py-1 w-24" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Features</label>
        {featureOptions.map(opt => (
          <div key={opt.value}>
            <label>
              <input
                type="checkbox"
                checked={features.includes(opt.value)}
                onChange={e => {
                  if (e.target.checked) setFeatures([...features, opt.value]);
                  else setFeatures(features.filter(f => f !== opt.value));
                }}
              /> {opt.label} (+${opt.price})
            </label>
          </div>
        ))}
      </div>
      <button className="theme-btn mt-2" onClick={calculateCost}>Calculate</button>
      <div className="mt-4 text-lg font-semibold">Estimated Cost: ${cost}</div>
    </div>
  );
};

export default AppCostCalculator;
