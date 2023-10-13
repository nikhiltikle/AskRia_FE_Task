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
    <Layout>
      <Content
        className='task-one-layout-content'
        style={{
          background: colorBgContainer,
        }}
      >
        <div className='appliaction-form-container'>
          <ApplicationFormHeader />
        </div>
        <ApplicationForm />
      </Content>
    </Layout>
  );
};

export default TaskOne;
