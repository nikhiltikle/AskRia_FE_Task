import './index.css';

import { Button, Col, Divider, Flex, Row, Typography } from 'antd';
import OpportunityDropDown from '../Dropdown';
import VideoCallMenuItem from '../VideoCallMenuItem';
import CpIcon from '../../icons/CpIcon';
import UserIcon from '../../icons/UserIcon';
import UserCheck from '../../icons/UserCheck';
import UserVoice from '../../icons/UserVoice';
import MailIcon from '../../icons/MailIcon';

const ctaButtons = [
  {
    id: '1',
    icon: CpIcon,
  },
  {
    id: '2',
    icon: UserIcon,
  },
  {
    id: '3',
    icon: UserCheck,
  },
  {
    id: '4',
    icon: UserVoice,
  },
  {
    id: '5',
    icon: MailIcon,
  },
];

const HomePageHeader = () => {
  return (
    <Row gutter={32}>
      <Col span={7}>
        <Flex vertical gap='8px'>
          <Typography.Title className='home-page-header-title' level={4}>
            London Internship Program
          </Typography.Title>

          <Typography className='home-page-header-subtitle'>London</Typography>
        </Flex>
      </Col>

      <Col span={17}>
        <Flex gap='middle' justify='space-between'>
          <OpportunityDropDown />

          <Flex align='center'>
            <Flex id='cta-button' gap='8px' align='center'>
              {ctaButtons.map((button) => {
                const Icon = button.icon;
                return <Button key={button.id} size='large' icon={<Icon />} />;
              })}
            </Flex>

            <Divider type='vertical' className='divider' />
            <VideoCallMenuItem />
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default HomePageHeader;
