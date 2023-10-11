import './app.css';
import { Layout } from 'antd';
import SideNavigation from './components/SideNavigation';
import { useEffect } from 'react';

const { Sider } = Layout;

function App() {
  useEffect(() => {
    // We can use resize DOM api to update app height on resizing screen
    document.documentElement.style.cssText = `--app-height: ${window.innerHeight}px`;
  }, []);

  return (
    <Layout className='layout-styles'>
      <Sider
        className='sider-styles'
        width={72}
      >
        <SideNavigation />
      </Sider>
    </Layout>
  );
}

export default App;
