import React, { FC, useState } from 'react';
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
  };

  const setCustomisedQuestions = (questions: Question[]) => {
    setFormValue({ ...formValue, customisedQuestions: questions });
  };

  const setPersonalInformation = (personalInformation: PersonalInformation) => {
    setFormValue({ ...formValue, personalInformation: personalInformation });
  };

  const setProfile = (profile: Profile) => {
    setFormValue({ ...formValue, profile: profile });
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
