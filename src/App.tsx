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
  useEffect(() => {
    // We can use resize DOM api to update app height on resizing screen
    document.documentElement.style.cssText = `--app-height: ${window.innerHeight}px`;
  }, []);

  return (
    <Layout>
      <Sider width={72}>
        <SideNavigation />
      </Sider>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
