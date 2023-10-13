import './index.css';

import { Flex } from 'antd';
import ImageUpload from '../ImageUpload';
import PersonalInformation from '../PersonalInformation';
import ProfileInformation from '../ProfileInformation';
import { useApplicationFormContext } from '../../context/applicationForm';
import { useEffect } from 'react';
import { ApplicationFormState } from '../../interfaces/applicationForm';

interface FormProps {}

const ApplicationForm: React.FC<FormProps> = () => {
  const { setFormData, coverImage, personalInformation } =
    useApplicationFormContext();
  console.log({ coverImage, personalInformation });

  const fetchApplicationFormData = async () => {
    try {
      const formDataRes = await fetch(
        'http://127.0.0.1:4010/api/398.9189931590182/programs/consequuntur/application-form'
      );
      const parsedFormData: ApplicationFormState = await (
        await formDataRes.json()
      ).data?.attributes;

      setFormData(parsedFormData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplicationFormData();
  }, []);

  return (
    <Flex
      vertical
      gap='65px'
      className='application-form-container'
    >
      <ImageUpload
        label='Upload cover image'
        value={coverImage}
      />

      <PersonalInformation />

      <ProfileInformation />
    </Flex>
  );
};

export default ApplicationForm;
