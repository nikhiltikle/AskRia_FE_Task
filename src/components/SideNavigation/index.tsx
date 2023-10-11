import './index.css';

import type { MenuProps } from 'antd';
import { Avatar, Menu, Flex } from 'antd';
import AvatarIcon from '../../icons/AvatarIcon';
import HomeIcon from '../../icons/Home';
import GroupIcon from '../../icons/GroupIcon';
import ScheduleIcon from '../../icons/Schedule';
import ShareIcon from '../../icons/ShareIcon';
import Docucments from '../../icons/Documents';
import Notes from '../../icons/NotesIcon';
import LikeIcon from '../../icons/LikeIcon';
import ToggleIcon from '../../icons/Toggle';
import SettingsIcon from '../../icons/Settings';
import { getMenuItem } from '../../utils/helper';

const userItems: MenuProps['items'] = [
  getMenuItem('1', <SettingsIcon />),
  getMenuItem(
    '2',
    <Avatar
      size='small'
      style={{
        border: 'none',
        display: 'block',
        backgroundColor: 'var(--bg-blue-light)',
        color: 'var(--foreground-blue-light)',
        fontSize: 14,
        lineHeight: 'auto',
      }}
    >
      AS
    </Avatar>
  ),
];

const navigationItems: MenuProps['items'] = [
  getMenuItem('2', <HomeIcon />),
  getMenuItem('3', <GroupIcon />),
  getMenuItem('4', <ScheduleIcon />),
  getMenuItem('5', <ShareIcon />),
  getMenuItem('6', <Docucments />),
  getMenuItem('7', <Notes />),
  getMenuItem('8', <LikeIcon />),
  getMenuItem('9', <ToggleIcon />),
];

export default function SideNavigation() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Flex
      id='sideNavbarContainer'
      vertical
      gap='middle'
      align='center'
      justify='space-between'
      style={{
        height: 'var(--app-height)',
        padding: '12px',
        paddingBlock: '24px',
      }}
    >
      <Flex
        vertical
        align='center'
        gap='32px'
      >
        <AvatarIcon />
        <Menu
          onClick={onClick}
          items={navigationItems}
          style={{ minWidth: 0, flex: 'auto', border: 'none' }}
        />
      </Flex>

      <Flex
        vertical
        gap='24px'
      >
        <Menu
          onClick={onClick}
          items={userItems}
          style={{ minWidth: 0, flex: 'auto', border: 'none' }}
        />
      </Flex>
    </Flex>
  );
}
