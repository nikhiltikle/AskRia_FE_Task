import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ApplicationFormContext, initialApplicationFormState } from './Context';
import {
  ApplicationFormState,
  PersonalInformation,
  Profile,
  Question,
} from '../../interfaces/applicationForm';

interface ApplicationFormProviderProps {
  children: React.ReactNode;
}

export const ApplicationFormProvider: FC<ApplicationFormProviderProps> = ({
  children,
}) => {
  const [formValue, setFormValue] = useState<ApplicationFormState>(
    initialApplicationFormState
  );

  const setFormData = ({
    coverImage,
    profile,
    personalInformation,
    customisedQuestions,
  }: ApplicationFormState) => {
    setFormValue({
      coverImage,
      profile,
      personalInformation,
      customisedQuestions,
    });
  };

  const setCoverImage = (image: string) => {
    setFormValue({ ...formValue, coverImage: image });
    upsertApplicationFormData({ ...formValue, coverImage: image });
  };

  const setCustomisedQuestions = (questions: Question[]) => {
    setFormValue({ ...formValue, customisedQuestions: questions });
    upsertApplicationFormData({ ...formValue, customisedQuestions: questions });
  };

  const setPersonalInformation = (personalInformation: PersonalInformation) => {
    setFormValue({ ...formValue, personalInformation });
    upsertApplicationFormData({
      ...formValue,
      personalInformation,
    });
  };

  const setProfile = (profile: Profile) => {
    setFormValue({ ...formValue, profile: profile });
    upsertApplicationFormData({
      ...formValue,
      profile,
    });
  };

  const upsertApplicationFormData = async (formData: ApplicationFormState) => {
    try {
      const res = await fetch(process.env.REACT_APP_PUT_API as string, {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            id: uuidv4(),
            type: 'applicationForm',
            attributes: formData,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (![200, 202, 204].includes(res.status)) {
        throw new Error();
      }
    } catch (error) {
      console.log({ error });
      alert('Failed to upsert data');
    }
  };

  return (
    <ApplicationFormContext.Provider
      value={{
        ...formValue,
        setCoverImage,
        setCustomisedQuestions,
        setPersonalInformation,
        setProfile,
        setFormData,
      }}
    >
      {children}
    </ApplicationFormContext.Provider>
  );
};
