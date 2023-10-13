import { createContext, useContext } from 'react';
import {
  ApplicationFormContextState,
  ApplicationFormState,
  PersonalInformationActionOptions,
  ProfileActionOptions,
} from '../../interfaces/applicationForm';

const personalInformationActionState: PersonalInformationActionOptions = {
  internalUse: false,
  show: false,
};

const profileActionState: ProfileActionOptions = {
  mandatory: false,
  show: false,
};

export const initialApplicationFormState: ApplicationFormState = {
  coverImage: '',
  customisedQuestions: [],
  personalInformation: {
    currentResidence: personalInformationActionState,
    dateOfBirth: personalInformationActionState,
    emailId: personalInformationActionState,
    firstName: personalInformationActionState,
    gender: personalInformationActionState,
    idNumber: personalInformationActionState,
    lastName: personalInformationActionState,
    nationality: personalInformationActionState,
    phoneNumber: personalInformationActionState,
    personalQuestions: [],
  },
  profile: {
    education: profileActionState,
    experience: profileActionState,
    resume: profileActionState,
    profileQuestions: [],
  },
};

export const ApplicationFormContext =
  createContext<ApplicationFormContextState>({
    ...initialApplicationFormState,
    setCoverImage: (image) => {},
    setCustomisedQuestions: (questions) => {},
    setPersonalInformation: (personalInformation) => {},
    setProfile: (profile) => {},
    setFormData: ({
      coverImage,
      profile,
      personalInformation,
      customisedQuestions,
    }) => {},
  });

export const useApplicationFormContext = () =>
  useContext(ApplicationFormContext);
