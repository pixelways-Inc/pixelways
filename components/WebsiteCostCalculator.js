"use client";
import { useState } from "react";

const WebsiteCostCalculator = () => {
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState("basic");
  const [features, setFeatures] = useState([]);
  const [cost, setCost] = useState(0);

  const featureOptions = [
    { label: "Contact Form", value: "contact", price: 100 },
    { label: "Blog", value: "blog", price: 200 },
    { label: "E-commerce", value: "ecommerce", price: 800 },
    { label: "SEO Setup", value: "seo", price: 150 },
  ];

  const designOptions = [
    { label: "Basic", value: "basic", price: 500 },
    { label: "Premium", value: "premium", price: 1200 },
    { label: "Custom", value: "custom", price: 2500 },
  ];

  const calculateCost = () => {
    let total = pages * 100;
    total += designOptions.find(d => d.value === design)?.price || 0;
    total += features.reduce((sum, f) => {
      const opt = featureOptions.find(o => o.value === f);
      return sum + (opt ? opt.price : 0);
    }, 0);
    setCost(total);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Website Cost Calculator</h3>
      <div className="mb-4">
        <label className="block mb-2">Number of Pages</label>
        <input type="number" min={1} max={50} value={pages} onChange={e => setPages(Number(e.target.value))} className="border rounded px-2 py-1 w-24" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Design Type</label>
        <select value={design} onChange={e => setDesign(e.target.value)} className="border rounded px-2 py-1">
          {designOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
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

export default WebsiteCostCalculator;
