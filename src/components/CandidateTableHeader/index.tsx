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
      <Flex align='center'>
        <TableCheckbox />
        <Typography.Title level={5} className='candidate-table-header-title'>
          247 Candidates
        </Typography.Title>
      </Flex>

      <Flex align='center' gap='middle'>
        <Typography.Text className='candidate-table-header-subtitle'>
          Qualified
        </Typography.Text>
        <Divider type='vertical' />

        <Flex align='center' gap='small'>
          <Typography.Text className='candidate-table-subheading'>
            Task
          </Typography.Text>
          <Flex align='center' className='candidate-badge'>
            75
          </Flex>
        </Flex>

        <Divider type='vertical' />

        <Flex align='center' gap='middle'>
          <Typography.Text>Disqualified</Typography.Text>
          <Flex align='center' className='candidate-badge'>
            78
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
