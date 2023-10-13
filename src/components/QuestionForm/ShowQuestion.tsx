import { Button, Flex, Typography } from 'antd';
import pencilIcon from '../../assets/icons/pencil.svg';
import { Question } from '../../interfaces/applicationForm';
import { FC } from 'react';

interface ShowQuestionProps {
  question: Question;
  onEdit: () => void;
}

const ShowQuestion: FC<ShowQuestionProps> = ({ question, onEdit }) => {
  return (
    <>
      <Typography
        style={{ color: '#979797', fontSize: '14px', fontWeight: 500 }}
      >
        {question?.type}
      </Typography>
      <Flex
        align='flex-start'
        justify='space-between'
        style={{ width: '100%' }}
      >
        <Typography style={{ fontSize: '20px', fontWeight: 600 }}>
          {question?.question}
        </Typography>

        <Button
          type='text'
          onClick={onEdit}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          icon={
            <img
              src={pencilIcon}
              alt='Edit question'
            />
          }
        />
      </Flex>
    </>
  );
};

export default ShowQuestion;
