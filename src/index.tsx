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
          fontFamily: 'Poppins, sans-serif',
        },

        components: {
          Input: {
            padding: 16,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
