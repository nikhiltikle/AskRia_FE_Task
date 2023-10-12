import {
  Button,
  Checkbox,
  Col,
  Flex,
  Input,
  Row,
  Select,
  Typography,
} from 'antd';
import PlusIcon from '../Icons/Plus';
import { useState } from 'react';
import {
  initialQuestionState,
  questionTypeOptions,
  videoDurationType,
} from './constants';
import {
  Question,
  QuestionType,
  VideoDurationType,
} from '../../interfaces/global';
import ActionButton from './ActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import MenuIcon from '../Icons/Menu';

const QuestionForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const [question, setQuestion] = useState<Question>(initialQuestionState);

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

  const onSaveQuestion = () => {
    console.log({ question });
    setOpenForm(false);
  };

  const handleDeleteQuestion = () => {
    setQuestion(initialQuestionState);
    setOpenForm(false);
  };

  return (
    <Flex vertical className='question-form-container'>
      <Button
        icon={<PlusIcon />}
        className='question-form-plus-button'
        type='text'
        size='large'
        onClick={() => setOpenForm(true)}
      >
        Add a question
      </Button>

      {openForm && (
        <Flex vertical align='flex-start'>
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
            <>
              <Typography.Title level={4}>Question</Typography.Title>
              <Input
                name='question'
                placeholder='Type here'
                size='large'
                onChange={handleInputChange}
              />
              <ActionButton
                onDelete={handleDeleteQuestion}
                onSave={onSaveQuestion}
              />
            </>
          )}

          {question.type === QuestionType.YesOrNo && (
            <>
              <Typography.Title level={4}>Question</Typography.Title>
              <Input
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
                onDelete={() => setQuestion(initialQuestionState)}
                onSave={onSaveQuestion}
              />
            </>
          )}

          {question.type === QuestionType.MultipleChoice && (
            <>
              <Typography.Title level={4}>Question</Typography.Title>
              <Input
                name='question'
                placeholder='Type here'
                size='large'
                onChange={handleInputChange}
              />

              <Typography.Title level={5} className='question-type-title-style'>
                Choice
              </Typography.Title>

              <Flex vertical gap='8px' className='question-choices'>
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
                      onChange={(event) =>
                        handleChoiceInputChange(event, choiceIndex)
                      }
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
                name='maxChoice'
                placeholder='Enter number of choice allowed here'
                size='large'
                type='number'
                onChange={handleInputChange}
              />

              <ActionButton
                onDelete={() => setQuestion(initialQuestionState)}
                onSave={onSaveQuestion}
              />
            </>
          )}

          {question.type === QuestionType.Dropdown && (
            <>
              <Typography.Title level={4}>Question</Typography.Title>
              <Input
                name='question'
                placeholder='Type here'
                size='large'
                onChange={handleInputChange}
              />

              <Typography.Title level={5} className='choice-text-style'>
                Choice
              </Typography.Title>

              <Flex vertical gap='8px' className='question-choice-full-width'>
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
                      onChange={(event) =>
                        handleChoiceInputChange(event, choiceIndex)
                      }
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
                onDelete={() => setQuestion(initialQuestionState)}
                onSave={onSaveQuestion}
              />
            </>
          )}

          {question.type === QuestionType.Video && (
            <>
              <Typography.Title level={4}>Question</Typography.Title>
              <Flex
                vertical
                gap='20px'
                className='questiontype-video-container'
              >
                <Input
                  name='question'
                  placeholder='Type here'
                  size='large'
                  onChange={handleInputChange}
                />

                <Input
                  name='question'
                  placeholder='Type additional information'
                  size='large'
                  onChange={(event) => handleInputChange(event, true)}
                />

                <Row gutter={8} className='questiontype-video-row'>
                  <Col span={16}>
                    <Input
                      name='videoMaxDuration'
                      placeholder='Max duration of video'
                      size='large'
                      type='number'
                      onChange={(event) => handleInputChange(event, true)}
                    />
                  </Col>

                  <Col span={8}>
                    <Select
                      className='questiontype-video-select-container'
                      size='large'
                      value={question.additionalInfo.videoDurationType}
                      placeholder='in (sec/min)'
                      onChange={(value) =>
                        handleSelectChange('videoDurationType', value, true)
                      }
                      options={videoDurationType}
                    />
                  </Col>
                </Row>
              </Flex>

              <ActionButton
                onDelete={() => setQuestion(initialQuestionState)}
                onSave={onSaveQuestion}
              />
            </>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default QuestionForm;
