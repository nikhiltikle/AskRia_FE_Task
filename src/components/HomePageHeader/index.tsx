import { Button, Col, Flex, Row, Typography } from 'antd';
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
    id: '1',
    icon: UserIcon,
  },
  {
    id: '1',
    icon: UserCheck,
  },
  {
    id: '1',
    icon: UserVoice,
  },
];

export default function HomePageHeader() {
  return (
    <Row gutter={32}>
      <Col span={7}>
        <Flex
          vertical
          gap='8px'
        >
          <Typography.Title
            level={4}
            style={{ margin: 0, color: 'var(--foreground-blue-dark)' }}
          >
            London Internship Program
          </Typography.Title>

          <Typography style={{ fontSize: '12px' }}>London</Typography>
        </Flex>
      </Col>

      <Col span={17}>
        <Flex
          gap='middle'
          justify='space-between'
        >
          <OpportunityDropDown />

          <Flex>
            <Flex
              gap='8px'
              align='center'
            >
              <Button
                size='large'
                icon={<CpIcon />}
              />
              <Button
                size='large'
                icon={<UserIcon />}
              />
              <Button
                size='large'
                icon={<UserCheck />}
              />
              <Button
                size='large'
                icon={<UserVoice />}
              />
              <Button
                size='large'
                icon={<MailIcon />}
              />
            </Flex>
            <VideoCallMenuItem />
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
}
