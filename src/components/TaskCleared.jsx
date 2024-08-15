import { useState } from 'react';

const TasksCleared = () => {
  const [clearedTasks, setClearedTasks] = useState([
    { id: 1, description: 'Completed Q1 financial report', date: '2023-03-31' },
    { id: 2, description: 'Launched website redesign', date: '2023-04-15' },
    { id: 3, description: 'Onboarded 5 new clients', date: '2023-05-02' },
  ]);
  const [newTask, setNewTask] = useState({ description: '', date: '' });

  const handleAddTask = () => {
    if (newTask.description.trim() !== '' && newTask.date) {
      setClearedTasks([...clearedTasks, { id: Date.now(), ...newTask }]);
      setNewTask({ description: '', date: '' });
    }
  };

  const removeTask = (id) => {
    setClearedTasks(clearedTasks.filter(task => task.id !== id));
  };

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Tasks Cleared</h2>
        <ul className="space-y-2 mb-4">
          {clearedTasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
              <div>
                <span className="text-gray-700">{task.description}</span>
                <span className="text-sm text-gray-500 ml-2">({task.date})</span>
              </div>
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2 flex-col lg:flex-row md:flex-row gap-2 lg:gap-0 md:gap-0">
          <div className='flex gap-2 flex-col lg:flex-row items-center'>
            <input
              type="text"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              placeholder="Enter cleared task"
              className="flex-grow w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
              className="px-3 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Cleared Task
          </button>
        </div>
      </section>
    </div>
  );
};

export default TasksCleared;