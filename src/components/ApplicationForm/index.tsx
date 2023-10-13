import './index.css';

import { Flex } from 'antd';
import { useEffect } from 'react';
import ImageUpload from '../ImageUpload';
import PersonalInformation from '../PersonalInformation';
import ProfileInformation from '../ProfileInformation';
import { useApplicationFormContext } from '../../context/applicationForm';
import { ApplicationFormState } from '../../interfaces/applicationForm';
import AdditionalQuestions from '../AdditionalQuestions';

const ApplicationForm = () => {
  const { setFormData, coverImage, setCoverImage } =
    useApplicationFormContext();

  const fetchApplicationFormData = async () => {
    try {
      const formDataRes = await fetch(process.env.REACT_APP_GET_API as string);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteCoverImage = () => {
    setCoverImage('');
  };

  const handleSaveImage = (url: string) => {
    setCoverImage(url);
  };

  return (
    <Flex
      vertical
      gap='65px'
      className='application-form-container'
    >
      <ImageUpload
        label='Upload cover image'
        value={coverImage}
        onDelete={handleDeleteCoverImage}
        onLoadImage={handleSaveImage}
      />
      <PersonalInformation />
      <ProfileInformation />
      <AdditionalQuestions />
    </Flex>
  );
};

export default ApplicationForm;
