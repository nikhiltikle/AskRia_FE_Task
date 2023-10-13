import './index.css';

import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import { antdTheme } from './theme/antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider theme={antdTheme}>
    <App />
  </ConfigProvider>
);
