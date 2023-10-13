import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Checkbox, Input, Typography } from 'antd';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface YesOrNoQuestionProps {
  question: Question;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteQuestion: () => void;
  handleSaveQuestion: () => void;
  handleCheckboxChange: (event: CheckboxChangeEvent) => void;
}

const YesOrNoQuestion: FC<YesOrNoQuestionProps> = ({
  handleDeleteQuestion,
  handleInputChange,
  handleSaveQuestion,
  handleCheckboxChange,
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
      <Checkbox
        name='disqualify'
        checked={question.disqualify}
        onChange={handleCheckboxChange}
        className='question-type-checkbox-style'
      >
        Disqualify candidate if the answer is no
      </Checkbox>
      <ActionButton
        onDelete={handleDeleteQuestion}
        onSave={handleSaveQuestion}
      />
    </>
  );
};

export default YesOrNoQuestion;
