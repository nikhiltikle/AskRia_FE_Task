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
    <Flex
      vertical
      gap='small'
      align='start'
    >
      <Typography className='candidate-heading'>{heading}</Typography>
      <Typography className='candidate-subheading'>{subHeading}</Typography>
      <Typography className='candidate-education'>{education}</Typography>

      <Flex
        align='start'
        gap='small'
        className='candidate-hashTags-container'
      >
        {hashTags.map((hashTag: string) => {
          return (
            <Typography
              key={hashTag}
              className='candidate-hashTags'
            >
              {hashTag}
            </Typography>
          );
        })}
      </Flex>

      <Flex
        justify='center'
        align='center'
        gap={'8px'}
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
              <Typography className='candidate-placement-tag-text'>
                {text}
              </Typography>
            </Tag>
          );
        })}
      </Flex>
    </Flex>
  );
}
