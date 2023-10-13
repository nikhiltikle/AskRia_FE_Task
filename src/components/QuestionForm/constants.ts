import { v4 as uuidv4 } from 'uuid';
import {
  Question,
  QuestionType,
  VideoDurationType,
} from '../../interfaces/global';

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
    value: 'paragraph',
    label: 'Paragraph',
  },
  {
    value: 'multipleChoice',
    label: 'Multiple Choice',
  },
  {
    value: 'dropdown',
    label: 'Dropdown',
  },
  {
    value: 'yesOrNo',
    label: 'Yes or no',
  },
  {
    value: 'video',
    label: 'Video question',
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
