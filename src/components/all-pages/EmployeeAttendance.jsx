import  { useState } from 'react';

const EmployeeAttendance = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Great Khali', attendance: [true, true, false, true, true] },
    { id: 2, name: 'Brock Lesner', attendance: [true, true, true, true, false] },
    { id: 3, name: 'John Cena', attendance: [false, true, true, true, true] },
    { id: 4, name: 'Mike Tyson', attendance: [false, true, true, true, true] },
    { id: 5, name: 'Undertaker', attendance: [false, true, true, true, true] },

  ]);

  const toggleAttendance = (employeeId, day) => {
    setEmployees(employees.map(employee => {
      if (employee.id === employeeId) {
        const newAttendance = [...employee.attendance];
        newAttendance[day] = !newAttendance[day];
        return { ...employee, attendance: newAttendance };
      }
      return employee;
    }));
  };

  const calculateAttendancePercentage = (attendance) => {
    const presentDays = attendance.filter(day => day).length;
    return ((presentDays / attendance.length) * 100).toFixed(2);
  };

  return (
    <div className='lg:mr-8 sm:ml-72 lg:mt-16 mt-8 p-5 lg:p-0 animate-fade-in-down'>
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Employee Attendance</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Employee Name</th>
              <th className="px-4 py-2 text-center">Monday</th>
              <th className="px-4 py-2 text-center">Tuesday</th>
              <th className="px-4 py-2 text-center">Wednesday</th>
              <th className="px-4 py-2 text-center">Thursday</th>
              <th className="px-4 py-2 text-center">Friday</th>
              <th className="px-4 py-2 text-center">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id} className="border-b">
                <td className="px-4 py-2 dark:text-white">{employee.name}</td>
                {employee.attendance.map((day, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    <button
                      className={`px-2 py-1 rounded ${day ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white`}
                      onClick={() => toggleAttendance(employee.id, index)}
                    >
                      {day ? 'Present' : 'Absent'}
                    </button>
                  </td>
                ))}
                <td className="px-4 py-2 text-center dark:text-white">
                  {calculateAttendancePercentage(employee.attendance)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
};

export default EmployeeAttendance;