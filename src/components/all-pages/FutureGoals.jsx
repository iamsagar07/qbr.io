import { useState } from 'react';

const FutureGoals = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Implement new marketing strategy', completed: false },
    { id: 2, description: 'Hire 2 new developers', completed: false },
    { id: 3, description: 'Conduct customer satisfaction survey', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), description: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Future Goals</h2>
        <ul className="space-y-2 mb-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-700'} dark:text-white`}>
                {task.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2 flex-col lg:flex-row md:flex-row gap-3 lg:gap-0 md:gap-0">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
      </section>
    </div>
  );
};

export default FutureGoals;