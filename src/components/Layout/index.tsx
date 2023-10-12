import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content, Sider } = Layout;

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

const Layout2 = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout2-container'>
      <Layout>
        <Sider
          width={62}
          className='layout2-slider-style'
          style={{ background: colorBgContainer }}
        >
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['side-1']}
            className='layout2-slider-style'
            items={items2}
          />
        </Sider>
        <Layout className='layout-style'>
          <Content
            style={{
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layout2;
