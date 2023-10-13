import { createBrowserRouter } from 'react-router-dom';
import TaskOne from './pages/TaskOne';
import TaskTwo from './pages/TaskTwo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskOne />,
  },
  {
    path: '/tasktwo',
    element: <TaskTwo />,
  },
]);
