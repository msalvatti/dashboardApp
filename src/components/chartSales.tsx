import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface ChartData {
  salesOverTime: {
    labels: string[];
    data: number[];
  };
}

interface ChartProps {
  chartsData: ChartData;
  isDarkTheme: boolean;
}

const ChartSales: React.FC<ChartProps> = ({ chartsData, isDarkTheme }) => {
  return (
    <div className={`chart w-4/5 flex-row items-center justify-center ${isDarkTheme ? "text-white" : "text-black"}`}>
      <h2 className="text-center mb-2">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartsData.salesOverTime.labels.map((label, index) => ({
            label,
            value: chartsData.salesOverTime.data[index],
          }))}
        >
          <XAxis
            dataKey="label"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={70}
            tick={{ fill: isDarkTheme ? "white" : "black" }}
          />
          <YAxis />
          <Tooltip
            cursor={false}
            contentStyle={{ background: isDarkTheme ? "#333" : "#f5f5f5" }}
            labelStyle={{ display: "none" }}
            itemStyle={{ fontSize: 12, color: isDarkTheme ? "white" : "black" }}
            labelFormatter={(value) => `$${value}`}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Bar dataKey="value" fill={isDarkTheme ? "rgba(255, 99, 132, 0.2)" : "rgba(54, 162, 235, 0.2)"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSales;
