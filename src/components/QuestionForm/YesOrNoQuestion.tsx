import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Checkbox, Input, Typography } from 'antd';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface YesOrNoQuestionProps {
  question: Question;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteQuestion: () => void;
  onSaveQuestion: () => void;
  onCheckboxChange: (event: CheckboxChangeEvent) => void;
}

const YesOrNoQuestion: FC<YesOrNoQuestionProps> = ({
  onDeleteQuestion,
  onInputChange,
  onSaveQuestion,
  onCheckboxChange,
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
      <Checkbox
        name='disqualify'
        checked={question.disqualify}
        onChange={onCheckboxChange}
        className='question-type-checkbox-style'
      >
        Disqualify candidate if the answer is no
      </Checkbox>
      <ActionButton
        onDelete={onDeleteQuestion}
        onSave={onSaveQuestion}
      />
    </>
  );
};

export default YesOrNoQuestion;
