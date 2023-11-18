import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartData {
  userEngagement: {
    labels: string[];
    data: number[];
  };
}

interface ChartProps {
  chartsData: ChartData;
  isDarkTheme: boolean;
}

const ChartUser: React.FC<ChartProps> = ({ chartsData, isDarkTheme }) => {
  return (
    <div className="chart w-4/5 flex-row items-center justify-center">
      <h2 className={`text-center mt-10 ${isDarkTheme ? "text-white" : "text-black"}`}>User Engagement</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={chartsData.userEngagement.labels.map((label, index) => ({
              label: `${label} | ${chartsData.userEngagement.data[index]}`,
              value: chartsData.userEngagement.data[index],
            }))}
            cx="50%"
            cy="50%"
            outerRadius={60}
            label={(entry) => entry.label}
          >
            {chartsData.userEngagement.data.map((value, index) => {
              let color;
              if (isDarkTheme) {
                color = `rgba(255, ${100 + index * 30}, ${100 + index * 40}, 0.6)`;
              } else {
                color = `rgba(0, 0, ${100 + index * 40}, 0.6)`;
              }
              return <Cell key={index} fill={color} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartUser;
