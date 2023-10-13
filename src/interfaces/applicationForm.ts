export enum QuestionType {
  Default = '',
  Paragraph = 'Paragraph',
  MultipleChoice = 'MultipleChoice',
  Dropdown = 'Dropdown',
  YesOrNo = 'YesNo',
  Video = 'Video',
  ShortAnswer = 'ShortAnswer',
  Date = 'Date',
  Number = 'Number',
  FileUpload = 'FileUpload',
}

export enum VideoDurationType {
  Minute = 'Minute',
  Seconds = 'Seconds',
}

export interface QuestionAdditionalInfo {
  question: string;
  videoMaxDuration: number;
  videoDurationType: VideoDurationType;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  choices: string[];
  maxChoice?: number;
  disqualify?: boolean;
  other?: boolean;
  additionalInfo: QuestionAdditionalInfo;
}

export interface PersonalInformationActionOptions {
  internalUse: boolean;
  show: boolean;
}

export interface ProfileActionOptions {
  mandatory: boolean;
  show: boolean;
}

export interface PersonalInformation {
  currentResidence: PersonalInformationActionOptions;
  dateOfBirth: PersonalInformationActionOptions;
  emailId: PersonalInformationActionOptions;
  firstName: PersonalInformationActionOptions;
  gender: PersonalInformationActionOptions;
  lastName: PersonalInformationActionOptions;
  idNumber: PersonalInformationActionOptions;
  nationality: PersonalInformationActionOptions;
  phoneNumber: PersonalInformationActionOptions;
  personalQuestions?: Question[];
}

export interface Profile {
  education: ProfileActionOptions;
  experience: ProfileActionOptions;
  resume: ProfileActionOptions;
  profileQuestions?: Question[];
}

export interface ApplicationFormState {
  coverImage: string;
  customisedQuestions: Question[];
  personalInformation: PersonalInformation;
  profile: Profile;
}

export interface ApplicationFormActions {
  setCoverImage: (image: string) => void;
  setProfile: (profile: Profile) => void;
  setPersonalInformation: (personalInformation: PersonalInformation) => void;
  setCustomisedQuestions: (questions: Question[]) => void;
  setFormData: ({
    coverImage,
    profile,
    personalInformation,
    customisedQuestions,
  }: ApplicationFormState) => void;
}

export interface ApplicationFormContextState
  extends ApplicationFormState,
    ApplicationFormActions {}
