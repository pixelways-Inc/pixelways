"use client"
import { useState } from "react";

const DesktopCostCalculator = () => {
  const [platforms, setPlatforms] = useState([]);
  const [screens, setScreens] = useState(5);
  const [features, setFeatures] = useState([]);
  const [cost, setCost] = useState(0);

  const platformOptions = [
    { label: "Windows", value: "windows", price: 400 },
    { label: "Mac", value: "mac", price: 400 },
    { label: "Linux", value: "linux", price: 400 },
  ];

  const featureOptions = [
    { label: "User Authentication", value: "auth", price: 180 },
    { label: "File Export/Import", value: "file", price: 220 },
    { label: "Database Integration", value: "db", price: 300 },
    { label: "Cloud Sync", value: "cloud", price: 350 },
    { label: "Notifications", value: "notifications", price: 150 },
    { label: "Custom UI/UX", value: "uiux", price: 200 },
    { label: "Multi-language", value: "multilang", price: 300 },
    { label: "Printing Support", value: "print", price: 120 },
    { label: "Plugin System", value: "plugin", price: 400 },
    { label: "Custom Animation", value: "animation", price: 190 },
  ];

  const calculateCost = () => {
    let total = screens * 120;
    total += platforms.reduce((sum, p) => {
      const opt = platformOptions.find(o => o.value === p);
      return sum + (opt ? opt.price : 0);
    }, 0);
    total += features.reduce((sum, f) => {
      const opt = featureOptions.find(o => o.value === f);
      return sum + (opt ? opt.price : 0);
    }, 0);
    setCost(total);
  };

  return (
    <div className={`pricing-item style-three`}>
      <h4 className="title mb-3">Desktop App Cost Calculator</h4>
      <div className="text mb-4">Estimate your desktop app project cost instantly</div>
      <div className="included mb-2">Options:</div>
      <ul className="list-style-one mb-4">
        <li>
          <label>Platforms:</label>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {platformOptions.map(opt => (
              <label key={opt.value} className="me-3">
                <input
                  type="checkbox"
                  checked={platforms.includes(opt.value)}
                  onChange={e => {
                    if (e.target.checked) setPlatforms([...platforms, opt.value]);
                    else setPlatforms(platforms.filter(f => f !== opt.value));
                  }}
                /> {opt.label} (+${opt.price})
              </label>
            ))}
          </div>
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
  <div className="mt-4 price text-lg font-semibold"><span style={{display:'block',marginBottom:'6px'}}>Estimated</span> <br />Cost: ${cost}</div>
    </div>
  );
};

export default DesktopCostCalculator;
