import { FC } from 'react';
import { Question } from '../../interfaces/applicationForm';
import { Button, Checkbox, Flex, Input, Typography } from 'antd';
import MenuIcon from '../../icons/Menu';
import PlusIcon from '../../icons/Plus';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface MultiChoiceQuestionProps {
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

const MultiChoiceQuestion: FC<MultiChoiceQuestionProps> = ({
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
        className='question-type-title-style'
      >
        Choice
      </Typography.Title>

      <Flex
        vertical
        gap='8px'
        className='question-choices'
      >
        {question.choices?.map((choice, choiceIndex, allChoices) => (
          <Flex
            key={choiceIndex}
            gap='8px'
            align='center'
            className='question-choices'
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
                className='choice-index-button'
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
        className='choicebox-other-button'
      >
        Enable “Other” option
      </Checkbox>

      <Typography.Title level={4}>Max choice allowed</Typography.Title>
      <Input
        value={question.maxChoice}
        name='maxChoice'
        placeholder='Enter number of choice allowed here'
        size='large'
        type='number'
        onChange={handleInputChange}
      />

      <ActionButton
        onDelete={handleDeleteQuestion}
        onSave={handleSaveQuestion}
      />
    </>
  );
};

export default MultiChoiceQuestion;
