import { useState } from 'react';

const ProgressOnPresentGoals = () => {
  const [goals, setGoals] = useState([
    { id: 1, description: 'Increase revenue by 15%', progress: 60 },
    { id: 2, description: 'Launch new product line', progress: 80 },
    { id: 3, description: 'Expand to 3 new markets', progress: 40 },
  ]);

  const handleProgressChange = (id, newProgress) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, progress: Math.min(100, Math.max(0, newProgress)) } : goal
    ));
  };

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
      <section className="bg-gray-100 dark:bg-gray-800 dark:text-white p-6  rounded-lg mb-8">
        <h2 className="text-xl lg:text-2xl md:text-2xl dark:text-white font-semibold text-gray-800 mb-4">Progress on Present Goals</h2>
        <ul className="space-y-4">
          {goals.map((goal) => (
            <li key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-white">{goal.description}</span>
                <span className="font-semibold">{goal.progress}%</span>
              </div>
              <div className="relative pt-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={goal.progress}
                  onChange={(e) => handleProgressChange(goal.id, parseInt(e.target.value))}
                  className={`w-full ${goal.progress < 30 ? 'accent-red-500' : 'accent-green-500'} cursor-pointer`}
                />
                <div className="flex mb-2 items-center justify-end">
                  <div className="text-right">
                    <span className={`text-xs font-semibold inline-block ${goal.progress < 30 ? 'text-red-600' : 'text-green-600'}`}>
                      {goal.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${goal.progress}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${goal.progress < 30 ? 'bg-red-500' : 'bg-blue-500'}`}
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

export default ProgressOnPresentGoals;