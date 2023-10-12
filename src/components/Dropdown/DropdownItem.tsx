import { Flex, Tag, Typography } from 'antd';

interface DropdownListItemProps {
  text: string;
  count: number;
}

const DropdownListItem = ({ text, count }: DropdownListItemProps) => {
  return (
    <Flex
      justify='space-between'
      align='center'
    >
      <Typography>{text}</Typography>

      <Tag
        style={{ padding: '2px 10px', fontSize: '14px', fontWeight: 500 }}
        bordered={false}
      >
        {count}
      </Tag>
    </Flex>
  );
};

export default DropdownListItem;
