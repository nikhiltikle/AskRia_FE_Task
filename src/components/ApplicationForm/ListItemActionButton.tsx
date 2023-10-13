import { Checkbox, Flex, Switch, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { MouseEvent } from 'react';

interface ListItemActionButtonProps {
  checked?: boolean;
  internal?: boolean;
  show?: boolean;
  onCheckboxChange: (event: CheckboxChangeEvent) => void;
  onSwitchChange: (
    checked: boolean,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
}

const ListItemActionButton: React.FC<ListItemActionButtonProps> = ({
  checked,
  show,
  internal = true,
  onCheckboxChange,
  onSwitchChange,
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
        <Switch
          checked={show}
          onChange={onSwitchChange}
        />
        <Typography>{show ? 'Hide' : 'Show'}</Typography>
      </Flex>
    </Flex>
  );
};

export default ListItemActionButton;
