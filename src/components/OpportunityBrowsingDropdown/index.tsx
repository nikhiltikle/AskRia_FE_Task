import './index.css';
import type { MenuProps } from 'antd';
import { Dropdown as AntdDropdown, Flex, Typography } from 'antd';
import DownArrow from '../../icons/DownArrow';
import DropdownListItem from './DropdownItem';

const items: MenuProps['items'] = [
  {
    label: (
      <DropdownListItem
        text={'Applied'}
        count={1753}
      />
    ),
    key: '1',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Shortlisted'}
        count={453}
      />
    ),
    key: '2',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Technical Interview'}
        count={123}
      />
    ),
    key: '3',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Opportutnity Browsing'}
        count={243}
      />
    ),
    key: '4',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Video Interview I'}
        count={25}
      />
    ),
    key: '5',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Video Interview II'}
        count={25}
      />
    ),
    key: '6',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Video Interview III'}
        count={25}
      />
    ),
    key: '7',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Offer'}
        count={25}
      />
    ),
    key: '8',
    icon: null,
  },
  { type: 'divider' },
  {
    label: (
      <DropdownListItem
        text={'Withdrawn'}
        count={25}
      />
    ),
    key: '9',
    icon: null,
  },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const OpportunityBrowsingDropdown: React.FC = () => {
  return (
    <AntdDropdown
      menu={menuProps}
      trigger={['click']}
    >
      <Flex
        className='dropdown-container'
        align='center'
        justify='space-between'
      >
        <Typography className='dropdown-text'>Opportunity Browsing</Typography>
        <DownArrow />
      </Flex>
    </AntdDropdown>
  );
};

export default OpportunityBrowsingDropdown;
