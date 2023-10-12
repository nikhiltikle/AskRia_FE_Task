import { Button, Flex } from 'antd';
import CrossIcon from '../Icons/Cross';
import './index.css';

interface ActionButtonProps {
  onDelete: () => void;
  onSave: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onDelete, onSave }) => {
  return (
    <Flex
      justify='space-between'
      align='center'
      className='action-button-container '
    >
      <Button
        icon={<CrossIcon />}
        type='text'
        onClick={onDelete}
        className='action-button-delete-style'
      >
        Delete question
      </Button>

      <Button
        type='primary'
        onClick={onSave}
        className='action-button-save-style'
      >
        Save
      </Button>
    </Flex>
  );
};

export default ActionButton;
