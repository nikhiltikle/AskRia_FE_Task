import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Button, Checkbox, Flex, Input, Typography } from 'antd';
import MenuIcon from '../../icons/Menu';
import PlusIcon from '../../icons/Plus';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface DropdownQuestionProps {
  question: Question;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteQuestion: () => void;
  handleSaveQuestion: () => void;
  handleChoiceInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddChoiceOption: () => void;
  handleCheckboxChange: (event: CheckboxChangeEvent) => void;
}

const DropdownQuestion: FC<DropdownQuestionProps> = ({
  handleDeleteQuestion,
  handleInputChange,
  handleSaveQuestion,
  handleChoiceInputChange,
  handleAddChoiceOption,
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

      <Typography.Title
        level={5}
        className='choice-text-style'
      >
        Choice
      </Typography.Title>

      <Flex
        vertical
        gap='8px'
        className='question-choice-full-width'
      >
        {question.choices?.map((choice, choiceIndex, allChoices) => (
          <Flex
            key={choiceIndex}
            gap='8px'
            align='center'
            className='question-choice-full-width'
          >
            <MenuIcon />

            <Input
              name='choice'
              value={choice}
              placeholder='Type here'
              size='large'
              onChange={(event) => handleChoiceInputChange(event, choiceIndex)}
            />

            {choiceIndex === allChoices.length - 1 && (
              <Button
                type='text'
                onClick={handleAddChoiceOption}
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
        onChange={handleCheckboxChange}
        className='checkbox-other-style'
      >
        Enable “Other” option
      </Checkbox>

      <ActionButton
        onDelete={handleDeleteQuestion}
        onSave={handleSaveQuestion}
      />
    </>
  );
};

export default DropdownQuestion;
