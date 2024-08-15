import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import ProgressOnPresentGoals from "./components/ProgressOnPresentGoals";
import ChangeInPlans from "./components/ChangeInPlans";
import PerformanceGraph from "./components/PerformanceGraph";
import FutureGoals from "./components/FutureGoals";
import TeamPerformance from "./components/TeamPerformance";
import TasksCleared from "./components/TaskCleared";
import EmployeeAttendance from "./components/EmployeeAttendance";

function App() {
  //max-w-7xl mx-auto p-4
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  })

  if (isLoading) {
    return (
        <div className='flex space-x-2 justify-center items-center bg-white dark:bg-gray-900 h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
         <div className='h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>
    );
  }

  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <ProgressOnPresentGoals />,
        },
        {
          path: "/plans",
          element: <ChangeInPlans />,
        },
        {
          path: "/performance-graph",
          element: <PerformanceGraph />,
        },
        {
          path: "/future-goals",
          element: <FutureGoals />,
        },
        {
          path: "/team-performnace",
          element: <TeamPerformance />,
        },
        {
          path: "/task-completed",
          element: <TasksCleared />,
        },
        {
          path: "/employee-attendence",
          element: <EmployeeAttendance />,
        },
      ],
    },
  ]);

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
