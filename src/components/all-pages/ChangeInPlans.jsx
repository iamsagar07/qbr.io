import  { useState } from 'react';
import useNotification from '../Custom hooks/useNotification';

const ChangeInPlans = () => {
  const [changes, setChanges] = useState([
    { id: 1, description: 'Shifted focus to remote work', date: '2023-04-01' },
    { id: 2, description: 'Delayed product launch by one month', date: '2023-05-15' },
  ]);
  const [newChange, setNewChange] = useState({ description: '', date: '' });
  const {handleNotification, triggerNotifications} = useNotification();


  const handleAddChange = () => {
    if (newChange.description.trim() !== '' && newChange.date) {
      setChanges([...changes, { id: Date.now(), ...newChange }]);
      setNewChange({ description: '', date: '' });
      triggerNotifications({
        type: "info",
        message: "Plan changed succesfully",
        duration: 2000,
    });
      
    }
  };

  return (
   <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
     <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Change in Plans</h2>
      <ul className="space-y-2 mb-4">
        {changes.map((change) => (
          <li key={change.id} className="bg-white p-3 rounded-lg shadow">
            <p className="text-gray-700">{change.description}</p>
            <p className="text-sm text-gray-500">Date: {change.date}</p>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 flex-col lg:flex-row gap-2 lg:gap-0">
        <div className='flex gap-2 flex-col lg:flex-row items-center'>
        <input
          type="text"
          value={newChange.description}
          onChange={(e) => setNewChange({ ...newChange, description: e.target.value })}
          placeholder="Enter change description"
          className="flex-grow w-full  md:w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={newChange.date}
          onChange={(e) => setNewChange({ ...newChange, date: e.target.value })}
          className="px-3 py-2 w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         
        />
        </div>
        <button
          onClick={handleAddChange}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Add Change
        </button>
      </div>
    </section>
    {handleNotification}
   </div>
  );
};

export default ChangeInPlans;