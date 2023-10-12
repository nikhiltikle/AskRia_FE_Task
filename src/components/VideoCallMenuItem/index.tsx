import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Typography } from 'antd';
import ExpandMore from '../../icons/ExpandMore';
import './index.css';
import { getMenuItem } from '../../utils/helper';

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const items: MenuProps['items'] = [
  getMenuItem('1', '1st menu item', <UserOutlined />),
  getMenuItem('2', '2nd menu item', <UserOutlined />),
  getMenuItem('3', '3rd menu item', <UserOutlined />),
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const VideoCallMenuItem: React.FC = () => (
  <div id='video-call-menu'>
    <Dropdown.Button
      size='large'
      type='primary'
      menu={menuProps}
      onClick={handleButtonClick}
      icon={<ExpandMore />}
    >
      <Typography.Text className='dropdown-button-font'>
        Move To Video Interview
      </Typography.Text>
    </Dropdown.Button>
  </div>
);

export default VideoCallMenuItem;
