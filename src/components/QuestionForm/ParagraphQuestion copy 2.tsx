import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';

interface ParagraphQuestionProps {
  question: Question;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteQuestion: () => void;
  handleSaveQuestion: () => void;
}

const ParagraphQuestion: FC<ParagraphQuestionProps> = ({
  handleDeleteQuestion,
  handleInputChange,
  handleSaveQuestion,
  question,
}) => {
  return <></>;
};

export default ParagraphQuestion;
