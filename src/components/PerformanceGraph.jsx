import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceGraph = () => {
  const data = [
    { name: 'Week 1', completed: 5, pending: 10 },
    { name: 'Week 2', completed: 8, pending: 7 },
    { name: 'Week 3', completed: 12, pending: 5 },
    { name: 'Week 4', completed: 15, pending: 3 },
  ];

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">Performance Graph</h2>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"

                allowDataOverflow={false}
                allowDecimals={true}
                allowDuplicatedCategory={true}
                angle={0}
                axisLine={true}

              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="pending" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default PerformanceGraph;