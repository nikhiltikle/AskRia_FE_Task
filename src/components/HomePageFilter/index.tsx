import './index.css';
import type { MenuProps } from 'antd';
import { Card, Flex, Input, Menu } from 'antd';
import SearchIcon from '../../icons/SearchIcon';
import WarningCircleIcon from '../../icons/WarningCircleIcon';
import Docucments from '../../icons/Documents';
import ArrowDown from '../../icons/ArrowDown';
import { getMenuItem } from '../../utils/helper';

const filterItems: MenuProps['items'] = [
  { type: 'divider' },
  getMenuItem('1', 'Personal Information', <Docucments />, [
    getMenuItem('01', 'Option 1'),
  ]),
  { type: 'divider' },
  getMenuItem('2', 'Education', <Docucments />, [
    getMenuItem('02', 'Option 1'),
  ]),
  { type: 'divider' },
  getMenuItem('3', 'Work Experience', <Docucments />, [
    getMenuItem('03', 'Option 1'),
  ]),
  { type: 'divider' },
  getMenuItem('4', 'Activity Filter', <Docucments />, [
    getMenuItem('04', 'Option 1'),
  ]),
  { type: 'divider' },
  getMenuItem('5', 'Advanced Filter', <Docucments />, [
    getMenuItem('05', 'Option 1'),
  ]),
];

export default function HomePageFilter() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Flex
      id='filter-menu'
      gap={'large'}
      vertical
    >
      <Input
        className='input-container'
        placeholder={'Serach by name, edu, exp or #tag'}
        size={'middle'}
        prefix={<SearchIcon />}
        suffix={<WarningCircleIcon />}
      />

      <Card
        title='Filters'
        extra='0 Selected'
        bordered={false}
      >
        <Menu
          onClick={onClick}
          mode='inline'
          items={filterItems}
          expandIcon={<ArrowDown />}
        />
      </Card>
    </Flex>
  );
}
