import { FC } from 'react';
import { Question, VideoDurationType } from '../../interfaces/applicationForm';
import { Col, Flex, Input, Row, Select, Typography } from 'antd';
import ActionButton from './ActionButton';
import { videoDurationType } from './constants';

interface VideoQuestionProps {
  question: Question;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    isAdditionalInfo?: boolean
  ) => void;
  handleDeleteQuestion: () => void;
  handleSaveQuestion: () => void;
  handleSelectChange: (
    name: string,
    value: VideoDurationType,
    isAdditionalInfo?: boolean
  ) => void;
}

const VideoQuestion: FC<VideoQuestionProps> = ({
  handleDeleteQuestion,
  handleInputChange,
  handleSaveQuestion,
  handleSelectChange,
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
          onChange={handleInputChange}
        />

        <Input
          value={question.additionalInfo?.question}
          name='question'
          placeholder='Type additional information'
          size='large'
          onChange={(event) => handleInputChange(event, true)}
        />

        <Row
          gutter={8}
          className='questiontype-video-row'
        >
          <Col span={16}>
            <Input
              value={question.additionalInfo?.videoMaxDuration}
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
        onDelete={handleDeleteQuestion}
        onSave={handleSaveQuestion}
      />
    </>
  );
};

export default VideoQuestion;
