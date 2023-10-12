import './index.css';

import { Divider, Flex, Tag, Typography } from 'antd';
import React from 'react';
import Docucments from '../../icons/Documents';
import PlayCircleIcon from '../../icons/PlayCircleIcon';
import CandidateCard from '../CandidateCard';
import TableCheckbox from '../CheckBox';

interface CandidateDataProps {
  id: number;
  heading: string;
  subHeading: string;
  education: string;
  hashTags: string[];
  buttonText: string[];
  buttons?: boolean;
}
const CandidateData: CandidateDataProps[] = [
  {
    id: 1,
    heading: 'Aaliyah Sanderson',
    subHeading: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#top_candidate', 'top_candidate'],
    buttonText: ['Ney York', 'Marketing', 'London'],
    buttons: true,
  },
  {
    id: 2,
    heading: 'Aaliyah Sanderson',
    subHeading: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#top_candidate', 'top_candidate'],
    buttonText: ['Ney York', 'Marketing', 'London'],
  },
  {
    id: 3,
    heading: 'Aaliyah Sanderson',
    subHeading: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#top_candidate', 'top_candidate'],
    buttonText: ['Ney York', 'Marketing', 'London'],
  },
  {
    id: 4,
    heading: 'Aaliyah Sanderson',
    subHeading: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#top_candidate', 'top_candidate'],
    buttonText: ['Ney York', 'Marketing', 'London'],
  },
  {
    id: 5,
    heading: 'Aaliyah Sanderson',
    subHeading: 'Riyadh, Saudi Arabia',
    education: 'Bachelor - Cambridge University (2023 - 2023)',
    hashTags: ['#top_candidate', 'top_candidate'],
    buttonText: ['Ney York', 'Marketing', 'London'],
  },
];

export default function CandidateTable() {
  return (
    <>
      {CandidateData.map((data, index) => {
        return (
          <React.Fragment key={data.id}>
            <Flex gap={4} className='candidate-card-container'>
              <Flex
                align='center'
                gap='middle'
                className='checkbox-candidate-card-container'
              >
                <TableCheckbox />
                <Flex
                  gap='large'
                  align='center'
                  className='candidate-content-avatar'
                >
                  <Flex
                    align='center'
                    justify='center'
                    className='candidate-avatar-container'
                  >
                    <Typography className='candidate-avatart-text'>
                      AS
                    </Typography>
                  </Flex>

                  <div className='candidate-content-container'>
                    <CandidateCard
                      heading={data.heading}
                      subHeading={data.subHeading}
                      education={data.education}
                      hashTags={data.hashTags}
                      buttonText={data.buttonText}
                    />
                  </div>
                </Flex>
              </Flex>

              {data.buttons && (
                <Flex
                  gap='middle'
                  justify='end'
                  className='candidate-card-buttons-container'
                >
                  <Tag color='#E3EBFF' icon={<PlayCircleIcon />}>
                    4
                  </Tag>
                  <Tag icon={<Docucments />} color='#E3EBFF'>
                    5 Programs
                  </Tag>
                </Flex>
              )}
            </Flex>
            {CandidateData.length - 1 !== index && (
              <Divider className='candidate-card-divider' />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
