import timelineData from "../data/timelineData";

const Timeline: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-200" id="timeline">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Career Timeline
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold mb-2">{item.date}</h3>
                <h4 className="text-lg font-medium text-blue-500">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
