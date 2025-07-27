import React from "react";

function FilterBar({ current, onChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded border ${
            current === f ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
