import './index.css';

import type { MenuProps } from 'antd';
import { Flex, Menu } from 'antd';
import React from 'react';
import Docucments from '../../icons/Documents';
import ArrowDown from '../../icons/ArrowDown';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const FilterHeader = ({ text, count }: { text: string; count: number }) => {
  return (
    <Flex justify='space-between'>
      <div className='filter-header-text'>{text}</div>
      <div className='filter-header-select-text'>{count} Selected</div>
    </Flex>
  );
};

const items: MenuProps['items'] = [
  getItem(<FilterHeader text={'Filters'} count={0} />, 'sub1', null),
  { type: 'divider' },
  getItem(
    'Personal Information',
    'sub2',
    <Docucments />,

    [getItem('Option 9', '9'), getItem('Option 10', '10')]
  ),

  { type: 'divider' },

  getItem('Education', 'sub3', <Docucments />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),

  { type: 'divider' },

  getItem('Work Experience', 'sub4', <Docucments />, [
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
  ]),

  { type: 'divider' },

  getItem('Activity Filter', 'sub5', <Docucments />, [
    getItem('Option 16', '16'),
    getItem('Option 17', '17'),
  ]),

  { type: 'divider' },

  getItem('Advanced Filter', 'sub6', <Docucments />),
];

const Filters: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      id='filter-menu'
      className='filter-menu-item'
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
      expandIcon={<ArrowDown />}
    />
  );
};

export default Filters;
