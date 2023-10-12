import { Checkbox, Flex, Switch, Typography } from 'antd';

interface ListItemActionButtonProps {
  checked?: boolean;
  internal?: boolean;
  hide?: boolean;
  onCheckboxChange?: () => void;
}

const ListItemActionButton: React.FC<ListItemActionButtonProps> = ({
  checked,
  hide,
  internal = true,
  onCheckboxChange,
}) => {
  return (
    <Flex
      align='center'
      gap='32px'
    >
      <Checkbox
        name='disqualify'
        checked={checked}
        onChange={onCheckboxChange}
      >
        {internal ? 'Internal' : 'Mandatory'}
      </Checkbox>

      <Flex
        align='center'
        gap='16px'
      >
        <Switch checked={!hide} />
        <Typography>Hide</Typography>
      </Flex>
    </Flex>
  );
};

export default ListItemActionButton;
