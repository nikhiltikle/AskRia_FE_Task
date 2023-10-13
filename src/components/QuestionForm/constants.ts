import { v4 as uuidv4 } from 'uuid';
import {
  Question,
  QuestionType,
  VideoDurationType,
} from '../../interfaces/applicationForm';

export const initialQuestionState: Question = {
  id: uuidv4(),
  type: QuestionType.Default,
  question: '',
  choices: [''],
  maxChoice: 0,
  disqualify: false,
  other: false,
  additionalInfo: {
    question: '',
    videoDurationType: VideoDurationType.Seconds,
    videoMaxDuration: 0,
  },
};

export const questionTypeOptions = [
  {
    value: QuestionType.Paragraph,
    label: 'Paragraph',
  },
  {
    value: QuestionType.MultipleChoice,
    label: 'Multiple Choice',
  },
  {
    value: QuestionType.Dropdown,
    label: 'Dropdown',
  },
  {
    value: QuestionType.YesOrNo,
    label: 'Yes or no',
  },
  {
    value: QuestionType.Video,
    label: 'Video question',
  },
  {
    value: QuestionType.ShortAnswer,
    label: 'Short answer',
  },
  {
    value: QuestionType.Date,
    label: 'Date',
  },
  {
    value: QuestionType.Number,
    label: 'Number',
  },
  {
    value: QuestionType.FileUpload,
    label: 'File upload',
  },
];

export const videoDurationType = [
  {
    value: 'Minute',
    label: 'Minute',
  },
  {
    value: 'Seconds',
    label: 'Seconds',
  },
];
