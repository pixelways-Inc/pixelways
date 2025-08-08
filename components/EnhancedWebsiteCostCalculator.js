"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

function getBulkDiscount(pages) {
  if (pages >= 30) return 0.25;
  if (pages >= 20) return 0.15;
  if (pages >= 10) return 0.08;
  return 0;
}

const EnhancedWebsiteCostCalculator = () => {
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState("basic");
  const [features, setFeatures] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    let base = pages * 80;
    base += designOptions.find(d => d.value === design)?.price || 0;
    base += features.reduce((sum, f) => {
      const opt = featureOptions.find(o => o.value === f);
      return sum + (opt ? opt.price : 0);
    }, 0);
    const discount = getBulkDiscount(pages);
    setCost(Math.round(base * (1 - discount)));
  }, [pages, design, features]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-lg p-8 mb-8 relative overflow-hidden"
      style={{ boxShadow: "0 0 40px 0 rgba(56,189,248,0.15)", position: "relative" }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px 0 rgba(56,189,248,0.15)",
            "0 0 60px 10px rgba(56,189,248,0.25)",
            "0 0 40px 0 rgba(56,189,248,0.15)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-white">Website Cost Calculator</h3>
        <div className="mb-4">
          <label className="block mb-2 text-white">Number of Pages</label>
          <input
            type="number"
            min={1}
            max={50}
            value={pages}
            onChange={e => setPages(Number(e.target.value))}
            className="border border-white/30 bg-white/20 rounded-3xl px-4 py-2 w-24 text-white focus:ring-2 focus:ring-cyan-400 transition-all duration-200 outline-none hover:border-cyan-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Design Type</label>
          <select
            value={design}
            onChange={e => setDesign(e.target.value)}
            className="border border-white/30 bg-white/20 rounded-3xl px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 transition-all duration-200 outline-none hover:border-cyan-400"
          >
            {designOptions.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-black text-white">{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Features</label>
          {featureOptions.map(opt => (
            <div key={opt.value} className="inline-block mr-4 mb-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition-all">
                <input
                  type="checkbox"
                  checked={features.includes(opt.value)}
                  onChange={e => {
                    if (e.target.checked) setFeatures([...features, opt.value]);
                    else setFeatures(features.filter(f => f !== opt.value));
                  }}
                  className="accent-cyan-400 rounded-3xl w-5 h-5 border border-white/30 focus:ring-cyan-400 transition-all duration-200"
                />
                {opt.label} <span className="text-cyan-300">(+${opt.price})</span>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-6 text-2xl font-semibold text-cyan-300 flex items-center gap-2">
          <motion.span
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            className="inline-block"
          >
            ${cost}
          </motion.span>
          <span className="text-base text-white/70">Estimated Cost</span>
        </div>
        {getBulkDiscount(pages) > 0 && (
          <div className="mt-2 text-sm text-cyan-400">Bulk discount applied!</div>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedWebsiteCostCalculator;
