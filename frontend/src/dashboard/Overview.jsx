import React from "react";
import StatCard from "@/components/StatCard";
import thumb from "@/assets/thumb.svg";
import heart from "@/assets/heart.svg";
import rating from "@/assets/rating.svg";

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
    <div>
      <div className="flex justify-between items-center max-xl:flex-wrap gap-6">
        {statData.map((data, index) => (
          <StatCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
