"use client";

import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RADIAN = Math.PI / 180;
const data = [
  { name: "Positive", value: 600, color: "#1476B5" },
  { name: "Negative", value: 300, color: "#FF8548" },
];
const needleValue = 600; // to change the position of the needle

// Needle rendering function
const renderNeedle = (value, data, cx, cy, iR, oR, color) => {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
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
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const chartRef = useRef(null);

  useEffect(() => {
    const updateChartSize = () => {
      if (chartRef.current) {
        const { width, height } = chartRef.current.getBoundingClientRect();
        const size = Math.min(width, height);
        setChartSize({ width: size, height: size });
      }
    };

    updateChartSize();
    const resizeObserver = new ResizeObserver(updateChartSize);
    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }
    return () => {
      if (chartRef.current) {
        resizeObserver.unobserve(chartRef.current);
      }
    };
  }, []);

  const { width, height } = chartSize;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = Math.min(width, height) / 2.5;
  const innerRadius = outerRadius * 0.9;

  return (
    <div
      ref={chartRef}
      className="w-full h-full min-h-[300px] flex items-center justify-center"
    >
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx={centerX}
              cy={centerY}
              startAngle={180}
              endAngle={0}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {renderNeedle(
              needleValue,
              data,
              centerX,
              centerY,
              innerRadius,
              outerRadius,
              "#1476B5"
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function PieChartComp() {
  return (
    <Card className="w-full h-full rounded-3xl flex flex-col">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="font-sans font-semibold text-lg sm:text-xl md:text-2xl leading-tight text-foreground">
          Feedback Sentiment
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center p-2 sm:p-4">
        <ResponsiveNeedlePieChart />
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center max-sm:items-start justify-between font-sans mt-2 sm:mt-4 p-4">
        <div className="text-center flex items-center gap-2 sm:gap-5 mb-2 sm:mb-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            <span className="font-bold">75%</span>
            <br /> Positive
          </p>
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#1476B5] rounded-full"></span>
        </div>
        <div className="text-center flex items-center gap-2 sm:gap-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            <span className="font-bold">25%</span>
            <br /> Negative
          </p>
          <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FF8548] rounded-full"></span>
        </div>
      </CardFooter>
    </Card>
  );
}
