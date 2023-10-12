// import { Content } from 'antd/es/layout/layout';
// import ApplicationForm from '../../comp/ApplicationForm';

// export default function TaskOne() {
//   return (
//     <Content>
//       <ApplicationForm />
//     </Content>
//   );
// }

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';
import React from 'react';
import ApplicationForm from '../../comp/ApplicationForm';
import './index.css';

const { Content } = Layout;

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `side-${key}`,
    icon: React.createElement(icon),
  };
});

const TaskOne = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='task-one-layout-container'>
      <Content
        className='task-one-layout-content'
        style={{
          background: colorBgContainer,
        }}
      >
        <ApplicationForm />
      </Content>
    </Layout>
  );
};

export default TaskOne;
