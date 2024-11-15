import React from "react";
import StatCard from "@/components/StatCard";
import thumb from "@/assets/thumb.svg";
import heart from "@/assets/heart.svg";
import rating from "@/assets/rating.svg";
import BarChartComp from "@/components/BarChartComp";
import PieChartComp from "@/components/PieChartComp";
import ScrollableFeedback from "@/components/ScrollableFeedback";
import BarChartHorizontalComp from "@/components/BarChartHorizontalComp";

const statData = [
  {
    icon: thumb,
    title: "Total Feedback Volume",
    value: "26,085",
  },
  {
    icon: heart,
    title: "Sentiment Score ",
    value: "85/100",
  },
  {
    icon: rating,
    title: "Average Rating ",
    value: "4.7",
  },
];

const Overview = () => {
  return (
    <div className="mx-5">
      <div className="flex justify-between items-center max-xl:flex-wrap gap-6 my-5">
        {statData.map((data, index) => (
          <StatCard data={data} key={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {/* Feedback Volume Bar Chart */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-4 rounded-lg">
          <BarChartComp />
        </div>

        {/* Feedback Sentiment Pie Chart */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-lg">
          <PieChartComp />
        </div>

        {/* Recent Feedback Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3 row-start-2 lg:row-auto rounded-lg">
          <ScrollableFeedback />
        </div>

        {/* Feedback by Platforms Horizontal Bar Chart */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3 row-start-3 lg:row-auto rounded-lg">
          <BarChartHorizontalComp />
        </div>
      </div>
    </div>
  );
};

export default Overview;
