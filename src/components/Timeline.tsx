import React from "react";
import timelineData, { TimelineItem } from "../data/timelineData";
import TimelineCard from "./TimelineCard";

const Timeline: React.FC = () => {
  return (
    <section
      className="h-screen bg-transparent flex flex-col justify-center items-center text-white"
      id="timeline"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Career Timeline
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {timelineData.map((item: TimelineItem, index: number) => (
              <TimelineCard
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
