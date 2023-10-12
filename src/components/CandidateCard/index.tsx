import './index.css';

import { Flex, Tag, Typography } from 'antd';

interface CandidateCardProps {
  heading: string;
  subHeading: string;
  education: string;
  hashTags: string[];
  buttonText: string[];
}

export default function CandidateCard({
  heading,
  subHeading,
  education,
  hashTags,
  buttonText,
}: CandidateCardProps) {
  return (
    <Flex vertical gap='small' align='start'>
      <Typography.Title className='candidate-heading' level={5}>
        {heading}
      </Typography.Title>
      <Typography.Text className='candidate-subheading'>
        {subHeading}
      </Typography.Text>
      <Typography.Text className='candidate-education'>
        {education}
      </Typography.Text>

      <Flex align='start' gap='small' className='candidate-hashTags-container'>
        {hashTags.map((hashTag: string) => {
          return (
            <Typography.Text key={hashTag} className='candidate-hashTags'>
              {hashTag}
            </Typography.Text>
          );
        })}
      </Flex>

      <Flex
        justify='center'
        align='center'
        gap={10}
        className='candidate-placement-tag-container '
      >
        {buttonText.map((text: string) => {
          return (
            <Tag
              className='candidate-placement-tag'
              bordered={false}
              color='cyan'
              key={text}
            >
              <Typography.Text className='candidate-placement-tag-text'>
                {text}
              </Typography.Text>
            </Tag>
          );
        })}
      </Flex>
    </Flex>
  );
}
