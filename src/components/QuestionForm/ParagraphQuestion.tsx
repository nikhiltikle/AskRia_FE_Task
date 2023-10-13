import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Input, Typography } from 'antd';
import ActionButton from './ActionButton';

interface ParagraphQuestionProps {
  question: Question;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteQuestion: () => void;
  onSaveQuestion: () => void;
}

const ParagraphQuestion: FC<ParagraphQuestionProps> = ({
  onDeleteQuestion,
  onInputChange,
  onSaveQuestion,
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
        onChange={onInputChange}
      />
      <ActionButton
        onDelete={onDeleteQuestion}
        onSave={onSaveQuestion}
      />
    </>
  );
};

export default ParagraphQuestion;
