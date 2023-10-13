import { FC } from 'react';
import {
  Question,
  QuestionAdditionalInfo,
  VideoDurationType,
} from '../../interfaces/applicationForm';
import { Col, Flex, Input, InputNumber, Row, Select, Typography } from 'antd';
import ActionButton from './ActionButton';
import { videoDurationType } from './constants';

interface VideoQuestionProps {
  question: Question;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    isAdditionalInfo?: boolean
  ) => void;
  onDeleteQuestion: () => void;
  onSaveQuestion: () => void;
  onSelectChange: (
    name: string,
    value: VideoDurationType,
    isAdditionalInfo?: boolean
  ) => void;
  onNumberInputChange: (
    name: keyof Question | keyof QuestionAdditionalInfo,
    value: number,
    isAdditionalInfo: boolean
  ) => void;
}

const VideoQuestion: FC<VideoQuestionProps> = ({
  onDeleteQuestion,
  onInputChange,
  onSaveQuestion,
  onSelectChange,
  onNumberInputChange,
  question,
}) => {
  return (
    <>
      <Typography.Title level={4}>Question</Typography.Title>
      <Flex
        vertical
        gap='20px'
        className='questiontype-video-container'
      >
        <Input
          value={question.question}
          name='question'
          placeholder='Type here'
          size='large'
          onChange={onInputChange}
        />

        <Input
          value={question.additionalInfo?.question}
          name='question'
          placeholder='Type additional information'
          size='large'
          onChange={(event) => onInputChange(event, true)}
        />

        <Row
          gutter={8}
          className='questiontype-video-row'
        >
          <Col span={16}>
            <InputNumber
              value={question.additionalInfo?.videoMaxDuration}
              placeholder='Max duration of video'
              size='large'
              onChange={(value) =>
                onNumberInputChange('videoMaxDuration', value as number, true)
              }
            />
          </Col>

          <Col span={8}>
            <Select
              className='questiontype-video-select-container'
              size='large'
              value={question.additionalInfo.videoDurationType}
              placeholder='in (sec/min)'
              onChange={(value) =>
                onSelectChange('videoDurationType', value, true)
              }
              options={videoDurationType}
            />
          </Col>
        </Row>
      </Flex>

      <ActionButton
        onDelete={onDeleteQuestion}
        onSave={onSaveQuestion}
      />
    </>
  );
};

export default VideoQuestion;
