import './index.css';
import { Button, Flex, Input, Select, Typography } from 'antd';
import PlusIcon from '../../icons/Plus';
import { FC, useState } from 'react';
import { initialQuestionState, questionTypeOptions } from './constants';
import {
  Question,
  QuestionAdditionalInfo,
  QuestionType,
  VideoDurationType,
} from '../../interfaces/applicationForm';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import ShowQuestion from './ShowQuestion';
import ParagraphQuestion from './ParagraphQuestion';
import YesOrNoQuestion from './YesOrNoQuestion';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import DropdownQuestion from './DropdownQuestion';
import VideoQuestion from './VideoQuestion';

type ConditionalProps =
  | {
      questionData?: Question;
      onDeleteQuestion: () => void;
    }
  | { questionData?: null | undefined; onDeleteQuestion?: () => void };

type QuestionFormProps = ConditionalProps & {
  onSaveQuestion: (question: Question) => void;
};

const QuestionForm: FC<QuestionFormProps> = ({
  questionData,
  onDeleteQuestion,
  onSaveQuestion,
}) => {
  const [openForm, setOpenForm] = useState(false);
  const [question, setQuestion] = useState<Question>(
    questionData ?? initialQuestionState
  );

  const handleSelectChange = (
    name: string,
    value: QuestionType | VideoDurationType,
    isAdditionalInfo?: boolean
  ) => {
    if (isAdditionalInfo) {
      setQuestion({
        ...question,
        additionalInfo: { ...question.additionalInfo, [name]: value },
      });
    } else {
      setQuestion({ ...question, [name]: value });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isAdditionalInfo?: boolean
  ) => {
    if (isAdditionalInfo) {
      setQuestion({
        ...question,
        additionalInfo: {
          ...question.additionalInfo,
          [event.target.name as keyof Question]: event?.target.value,
        },
      });
    } else {
      setQuestion({
        ...question,
        [event.target.name as keyof Question]: event?.target.value,
      });
    }
  };

  const handleNumberInputChange = (
    name: keyof Question | keyof QuestionAdditionalInfo,
    value: number,
    isAdditionalInfo?: boolean
  ) => {
    if (isAdditionalInfo) {
      setQuestion({
        ...question,
        additionalInfo: {
          ...question.additionalInfo,
          [name]: value,
        },
      });
    } else {
      setQuestion({
        ...question,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setQuestion({
      ...question,
      [event.target.name as keyof Question]: event?.target?.checked,
    });
  };

  const handleAddChoiceOption = () => {
    setQuestion({ ...question, choices: [...question.choices, ''] });
  };

  const handleChoiceInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const choices = [...question.choices];
    choices[index] = event.target.value;

    setQuestion({ ...question, choices });
  };

  const handleSaveQuestion = () => {
    setOpenForm(false);
    onSaveQuestion(question);

    !questionData && setQuestion(initialQuestionState);
  };

  const handleDeleteQuestion = () => {
    questionData && onDeleteQuestion();
    setQuestion(initialQuestionState);
    setOpenForm(false);
  };

  return (
    <Flex vertical>
      {!questionData && (
        <Button
          icon={<PlusIcon />}
          className='question-form-plus-button'
          type='text'
          size='large'
          onClick={() => setOpenForm(true)}
        >
          Add a question
        </Button>
      )}

      {!!questionData && (
        <ShowQuestion
          onEdit={() => setOpenForm(true)}
          question={questionData}
        />
      )}

      {openForm && (
        <Flex
          vertical
          align='flex-start'
        >
          <Typography.Title level={4}>Type</Typography.Title>
          <Select
            className='open-form-select-style'
            size='large'
            value={question.type}
            placeholder='Select Field Type'
            onChange={(value) => handleSelectChange('type', value)}
            options={questionTypeOptions}
          />

          {question.type === QuestionType.Paragraph && (
            <ParagraphQuestion
              onDeleteQuestion={handleDeleteQuestion}
              onInputChange={handleInputChange}
              onSaveQuestion={handleSaveQuestion}
              question={question}
            />
          )}

          {question.type === QuestionType.YesOrNo && (
            <YesOrNoQuestion
              onCheckboxChange={handleCheckboxChange}
              onDeleteQuestion={handleDeleteQuestion}
              onInputChange={handleInputChange}
              onSaveQuestion={handleSaveQuestion}
              question={question}
            />
          )}

          {question.type === QuestionType.MultipleChoice && (
            <MultiChoiceQuestion
              onNumberInputChange={handleNumberInputChange}
              onAddChoiceOption={handleAddChoiceOption}
              onCheckboxChange={handleCheckboxChange}
              onChoiceInputChange={handleChoiceInputChange}
              onDeleteQuestion={handleDeleteQuestion}
              onInputChange={handleInputChange}
              onSaveQuestion={handleSaveQuestion}
              question={question}
            />
          )}

          {question.type === QuestionType.Dropdown && (
            <DropdownQuestion
              onAddChoiceOption={handleAddChoiceOption}
              onCheckboxChange={handleCheckboxChange}
              onChoiceInputChange={handleChoiceInputChange}
              onDeleteQuestion={handleDeleteQuestion}
              onInputChange={handleInputChange}
              onSaveQuestion={handleSaveQuestion}
              question={question}
            />
          )}

          {question.type === QuestionType.Video && (
            <>
              <VideoQuestion
                onDeleteQuestion={handleDeleteQuestion}
                onInputChange={handleInputChange}
                onSaveQuestion={handleSaveQuestion}
                onSelectChange={handleSelectChange}
                onNumberInputChange={handleNumberInputChange}
                question={question}
              />
            </>
          )}

          {[
            QuestionType.Date,
            QuestionType.FileUpload,
            QuestionType.Number,
            QuestionType.ShortAnswer,
          ].includes(question.type) && (
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
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default QuestionForm;
