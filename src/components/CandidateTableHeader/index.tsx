import './index.css';
import { Divider, Flex, Typography } from 'antd';
import TableCheckbox from '../CheckBox';

export default function CandidateTableHeader() {
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
        <TableCheckbox />
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
}
