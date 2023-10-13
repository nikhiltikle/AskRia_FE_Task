import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Button, Checkbox, Flex, Input, Typography } from 'antd';
import MenuIcon from '../../icons/Menu';
import PlusIcon from '../../icons/Plus';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface DropdownQuestionProps {
  question: Question;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteQuestion: () => void;
  onSaveQuestion: () => void;
  onChoiceInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onAddChoiceOption: () => void;
  onCheckboxChange: (event: CheckboxChangeEvent) => void;
}

const DropdownQuestion: FC<DropdownQuestionProps> = ({
  onDeleteQuestion,
  onInputChange,
  onSaveQuestion,
  onChoiceInputChange,
  onAddChoiceOption,
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

      <Typography.Title
        level={5}
        className='choice-text-style'
      >
        Choice
      </Typography.Title>

      <Flex
        vertical
        gap='8px'
        className='question-choices-container'
      >
        {question.choices?.map((choice, choiceIndex, allChoices) => (
          <Flex
            key={choiceIndex}
            gap='8px'
            align='center'
            className='question-choices-container'
          >
            <MenuIcon />

            <Input
              name='choice'
              value={choice}
              placeholder='Type here'
              size='large'
              onChange={(event) => onChoiceInputChange(event, choiceIndex)}
            />

            {choiceIndex === allChoices.length - 1 && (
              <Button
                type='text'
                onClick={onAddChoiceOption}
                className='question-choice-plus-button'
                size='large'
                icon={<PlusIcon />}
              />
            )}
          </Flex>
        ))}
      </Flex>

      <Checkbox
        name='other'
        checked={question.other}
        onChange={onCheckboxChange}
        className='checkbox-other-style'
      >
        Enable “Other” option
      </Checkbox>

      <ActionButton
        onDelete={onDeleteQuestion}
        onSave={onSaveQuestion}
      />
    </>
  );
};

export default DropdownQuestion;
