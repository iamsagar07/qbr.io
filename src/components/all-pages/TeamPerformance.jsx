import { useState } from 'react';

const TeamPerformance = () => {
  const [teamMetrics, setTeamMetrics] = useState([
    { id: 1, metric: 'Productivity', value: 85 },
    { id: 2, metric: 'Customer Satisfaction', value: 92 },
    { id: 3, metric: 'Project Completion Rate', value: 78 },
  ]);

  const handleMetricChange = (id, newValue) => {
    setTeamMetrics(teamMetrics.map(metric =>
      metric.id === id ? { ...metric, value: Math.min(100, Math.max(0, newValue)) } : metric
    ));
  };

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">Team Performance</h2>
        <ul className="space-y-4">
          {teamMetrics.map((metric) => (
            <li key={metric.id}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700 dark:text-white">{metric.metric}</span>
                <span className="font-semibold dark:text-white">{metric.value}%</span>
              </div>
              <div className="relative pt-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={metric.value}
                  onChange={(e) => handleMetricChange(metric.id, parseInt(e.target.value))}
                  className={`w-full cursor-pointer ${metric.value < 30 ? 'accent-red-500' : 'accent-blue-500'}`}
                />
                <div className="flex mb-2 items-center justify-end">
                  <div className="text-right">
                    <span className={`text-xs font-semibold inline-block ${metric.value < 30 ? 'text-red-600' : 'text-blue-600'}`}>
                      {metric.value}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${metric.value}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${metric.value < 30 ? 'bg-red-500' : 'bg-green-500'}`}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TeamPerformance;