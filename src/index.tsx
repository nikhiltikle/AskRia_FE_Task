import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          paddingXXS: 10,
          colorPrimary: '#1D5ECD',
        },
        components: {
          Input: {
            padding: 16,
          },
          Typography: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
