import { Layout } from 'antd';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './app.css';
import SideNavigation from './components/SideNavigation';
import TaskOne from './pages/TaskOne';
import TaskTwo from './pages/TaskTwo';

const { Sider, Content } = Layout;

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskOne />,
  },
  {
    path: '/tasktwo',
    element: <TaskTwo />,
  },
]);

function App() {
  useEffect(() => {}, []);

  const setAppHeight = () => {
    // Save app height in CSS variable
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight}px`
    );
  };

  useEffect(() => {
    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  return (
    <Layout className='layout-container'>
      <Sider width={72}>
        <SideNavigation />
      </Sider>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
