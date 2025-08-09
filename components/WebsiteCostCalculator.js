"use client"
import { useState } from "react";

const WebsiteCostCalculator = () => {
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState("basic");
  const [features, setFeatures] = useState([]);
  const [cost, setCost] = useState(0);

  const featureOptions = [
    { label: "Contact Form", value: "contact", price: 120 },
    { label: "Blog", value: "blog", price: 180 },
    { label: "E-commerce", value: "ecommerce", price: 400 },
    { label: "SEO Setup", value: "seo", price: 160 },
    { label: "Image Gallery", value: "gallery", price: 140 },
    { label: "Testimonials", value: "testimonials", price: 130 },
    { label: "Newsletter Signup", value: "newsletter", price: 150 },
    { label: "Live Chat", value: "livechat", price: 220 },
    { label: "Booking System", value: "booking", price: 350 },
    { label: "Multi-language", value: "multilang", price: 300 },
    { label: "Custom Animation", value: "animation", price: 180 },
  ];

  const designOptions = [
    { label: "Basic", value: "basic", price: 300 },
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
    <div className={`pricing-item style-three`}>
      <h4 className="title mb-3">Website Project Cost Estimator</h4>
      <div className="text mb-4">Get an instant estimate for your custom website development project.</div>
      <div className="included mb-2">Options:</div>
      <ul className="list-style-one mb-4">
        <li>
          <label>Number of Pages
            <input type="number" min={1} max={50} value={pages} onChange={e => setPages(Number(e.target.value))} className="form-control d-inline-block w-24 ms-2" />
          </label>
        </li>
        <li>
          <label>Design Type
            <select value={design} onChange={e => setDesign(e.target.value)} className="form-control d-inline-block ms-2">
              {designOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
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

export default WebsiteCostCalculator;
