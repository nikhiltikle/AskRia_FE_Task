import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Input, Typography } from 'antd';
import ActionButton from './ActionButton';

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
  return (
    <>
      <Typography.Title level={4}>Question</Typography.Title>
      <Input
        value={question.question}
        name='question'
        placeholder='Type here'
        size='large'
        onChange={handleInputChange}
      />
      <ActionButton
        onDelete={handleDeleteQuestion}
        onSave={handleSaveQuestion}
      />
    </>
  );
};

export default ParagraphQuestion;
