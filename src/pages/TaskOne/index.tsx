import './index.css';
import { Layout, theme } from 'antd';
import ApplicationForm from '../../components/ApplicationForm';
import ApplicationFormHeader from '../../components/ApplicationFormHeader';
import { ApplicationFormProvider } from '../../context/applicationForm';

const { Content } = Layout;

const TaskOne = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ApplicationFormProvider>
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
    </ApplicationFormProvider>
  );
};

export default TaskOne;
