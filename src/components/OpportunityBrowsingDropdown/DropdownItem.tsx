import './index.css';
import { Flex, Tag, Typography } from 'antd';

interface DropdownListItemProps {
  text: string;
  count: number;
}

const DropdownListItem = ({ text, count }: DropdownListItemProps) => {
  return (
    <Flex justify='space-between' align='center'>
      <Typography>{text}</Typography>

      <Tag className='dropdown-list-item-tag ' bordered={false}>
        {count}
      </Tag>
    </Flex>
  );
};

export default DropdownListItem;
