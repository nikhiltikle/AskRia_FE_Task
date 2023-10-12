import './index.css';

import { Flex } from 'antd';
import ImageUpload from '../ImageUpload';
import PersonalInformation from '../PersonalInformation';
import ProfileInformation from '../ProfileInformation';

interface FormProps {}

const ApplicationForm: React.FC<FormProps> = () => {
  return (
    <Flex vertical gap='65px' className='application-form-container'>
      <ImageUpload label='Upload cover image' />

      <PersonalInformation />

      <ProfileInformation />
    </Flex>
  );
};

export default ApplicationForm;
