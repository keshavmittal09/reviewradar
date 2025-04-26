import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#FF6B6B", "#4ECDC4"];

export default function ReviewPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/api/review_summary");
      const json = await res.json();
      setData([
        { name: "Fake", value: json.fake },
        { name: "Real", value: json.real },
      ]);
    }
    fetchData();
  }, []);

  if (!data.length) return <p>Loading chart...</p>;

  return (
    <div className="flex justify-center items-center p-4">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}


