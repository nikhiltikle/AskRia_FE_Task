import { CheckboxChangeEvent } from 'antd/es/checkbox';
import './index.css';
import { Checkbox, Divider, Flex, Typography } from 'antd';

const CandidateTableHeader = () => {
  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Flex
      align='center'
      justify='space-between'
      className='candidate-table-header-container'
    >
      <Flex
        align='center'
        gap='32px'
      >
        <Checkbox onChange={onChangeCheckbox} />
        <Typography className='candidate-table-header-title'>
          247 Candidates
        </Typography>
      </Flex>

      <Flex
        align='center'
        gap='16px'
      >
        <Typography className='candidate-table-header-subtitle'>
          Qualified
        </Typography>

        <Divider type='vertical' />

        <Flex
          align='center'
          gap='8px'
        >
          <Typography className='candidate-table-subheading'>Task</Typography>
          <Flex
            align='center'
            className='candidate-badge'
            justify='center'
          >
            25
          </Flex>
        </Flex>

        <Divider type='vertical' />

        <Flex
          align='center'
          gap='middle'
        >
          <Typography className='candidate-table-subheading'>
            Disqualified
          </Typography>
          <Flex
            align='center'
            justify='center'
            className='candidate-badge'
          >
            78
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CandidateTableHeader;
