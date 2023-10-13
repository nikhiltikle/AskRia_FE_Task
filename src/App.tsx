import { Layout } from 'antd';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import SideNavigation from './components/SideNavigation';
import { router } from './router';

const { Sider, Content } = Layout;

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
