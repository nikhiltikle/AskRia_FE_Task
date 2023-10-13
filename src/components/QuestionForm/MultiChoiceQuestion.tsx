import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Button, Checkbox, Flex, Input, InputNumber, Typography } from 'antd';
import MenuIcon from '../../icons/Menu';
import PlusIcon from '../../icons/Plus';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface MultiChoiceQuestionProps {
  question: Question;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNumberInputChange: (name: keyof Question, value: number) => void;
  onDeleteQuestion: () => void;
  onSaveQuestion: () => void;
  onChoiceInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onAddChoiceOption: () => void;
  onCheckboxChange: (event: CheckboxChangeEvent) => void;
}

const MultiChoiceQuestion: FC<MultiChoiceQuestionProps> = ({
  onDeleteQuestion,
  onInputChange,
  onSaveQuestion,
  onChoiceInputChange,
  onAddChoiceOption,
  onCheckboxChange,
  onNumberInputChange,
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
        className='question-type-title-style'
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
        className='choicebox-other-button'
      >
        Enable “Other” option
      </Checkbox>

      <Typography.Title level={4}>Max choice allowed</Typography.Title>
      <InputNumber
        value={question.maxChoice}
        placeholder='Enter number of choice allowed here'
        size='large'
        onChange={(value) => onNumberInputChange('maxChoice', value as number)}
      />

      <ActionButton
        onDelete={onDeleteQuestion}
        onSave={onSaveQuestion}
      />
    </>
  );
};

export default MultiChoiceQuestion;
