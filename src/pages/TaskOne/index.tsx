import { Layout, theme } from 'antd';
import ApplicationForm from '../../components/ApplicationForm';
import './index.css';
import ApplicationFormHeader from '../../components/ApplicationFormHeader';

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
        <ApplicationFormHeader />
        <ApplicationForm />
      </Content>
    </Layout>
  );
};

export default TaskOne;
