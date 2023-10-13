import './index.css';
import { Checkbox, Divider, Flex, Tag } from 'antd';
import React from 'react';
import Docucments from '../../icons/Documents';
import PlayCircleIcon from '../../assets/icons/Play_Circle.png';
import CandidateCard from '../CandidateCard';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

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

const CandidateTable = () => {
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      {CandidateData.map((data, index) => (
        <React.Fragment key={data.id}>
          <Flex
            gap={4}
            justify='space-between'
            className='candidate-card-container'
          >
            <Flex
              align='center'
              gap='middle'
              className='checkbox-candidate-card-container'
            >
              <Checkbox onChange={onChangeCheckbox} />
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
                  AS
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
                gap='8px'
                justify='end'
                className='candidate-card-buttons-container'
              >
                <Tag
                  color='#E3EBFF'
                  bordered={false}
                  icon={
                    <img
                      src={PlayCircleIcon}
                      alt='Media'
                    />
                  }
                >
                  4
                </Tag>
                <Tag
                  id='programs'
                  bordered={false}
                  icon={<Docucments />}
                  color='#E3EBFF'
                >
                  5 Programs
                </Tag>
              </Flex>
            )}
          </Flex>
          {CandidateData.length - 1 !== index && (
            <Divider className='candidate-card-divider' />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default CandidateTable;
