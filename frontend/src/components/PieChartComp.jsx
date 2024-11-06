import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RADIAN = Math.PI / 90;
const data = [
  { name: "Group A", value: 600, color: "#183661" },
  { name: "Group B", value: 300, color: "#FF8548" },
];
const iR = 75;
const oR = 90;
const needleValue = 600; // to change the position of the needle

// Needle rendering function
const renderNeedle = (value, data, cx, cy, iR, oR, color) => {
  let total = data.reduce((acc, entry) => acc + entry.value, 0);
  const angle = 180 * (1 - value / total);
  const length = (iR + oR * 2) / 3;
  const sin = Math.sin(-RADIAN * angle);
  const cos = Math.cos(-RADIAN * angle);
  const r = 5; // Needle base radius
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} key="needle-base" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb}L${xp} ${yp}Z`}
      fill={color}
      key="needle"
    />,
  ];
};

const ResponsiveNeedlePieChart = () => {
  const [chartCenter, setChartCenter] = useState({ cx: 200, cy: 200 });
  const chartRef = useRef(null);

  // Calculate the center of the pie chart dynamically
  useEffect(() => {
    if (chartRef.current) {
      const { width, height } = chartRef.current.getBoundingClientRect();
      setChartCenter({ cx: width / 2, cy: height / 2 });
    }
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart ref={chartRef}>
        <Pie
          data={data}
          cx={chartCenter.cx}
          cy={chartCenter.cy}
          startAngle={180}
          endAngle={0}
          innerRadius={iR}
          outerRadius={oR}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {renderNeedle(
          needleValue,
          data,
          chartCenter.cx,
          chartCenter.cy,
          iR,
          oR,
          "#183693"
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

const ChartCard = () => {
  return (
    <Card className="w-full h-full max-w-lg mx-auto shadow-lg rounded-3xl">
      <CardHeader>
        <CardTitle>Feedback Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveNeedlePieChart />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-center flex items-center gap-5">
          <p className="text-2xl">
            <span className="font-bold">75% </span>
            <br /> Positive
          </p>
          <span
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#1476B5",
              borderRadius: "20px",
              display: "block",
            }}
          ></span>
        </div>
        <div className="text-center flex items-center gap-5">
          <p className="text-2xl">
            <span className="font-bold">25% </span>
            <br /> Negative
          </p>
          <span
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "#FF8548",
              borderRadius: "20px",
              display: "block",
            }}
          ></span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartCard;
