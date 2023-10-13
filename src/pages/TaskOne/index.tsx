import { Layout, theme } from 'antd';
import ApplicationForm from '../../components/ApplicationForm';
import './index.css';

const { Content } = Layout;

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
