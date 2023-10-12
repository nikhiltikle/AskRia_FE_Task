import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export enum QuestionType {
  Default = '',
  Paragraph = 'paragraph',
  MultipleChoice = 'multipleChoice',
  Dropdown = 'dropdown',
  YesOrNo = 'yesOrNo',
  Video = 'video',
}

export enum VideoDurationType {
  Minute = 'Minute',
  Seconds = 'Seconds',
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
  additionalInfo: {
    question: string;
    videoMaxDuration: number;
    videoDurationType: VideoDurationType;
  };
}
