// TimelineCard.tsx
import React from "react";
import { TimelineItem } from "../data/timelineData";

interface TimelineCardProps extends TimelineItem {}

const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2">{date}</h3>
      <h4 className="text-lg font-medium text-blue-500">{title}</h4>
      {description && (
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      )}
    </div>
  );
};

export default TimelineCard;
