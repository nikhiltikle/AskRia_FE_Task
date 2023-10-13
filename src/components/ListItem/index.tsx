import { Flex, Typography } from 'antd';
import React from 'react';
import './index.css';

interface ListItemProps {
  label: string;
  caption?: string;
  actionButton?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  label,
  caption,
  actionButton,
}) => {
  return (
    <Flex
      align='center'
      justify='space-between'
      className='list-item-container'
    >
      <Typography className='list-item-label'>
        {label}
        {caption && (
          <Typography className='list-item-caption'>{`(${caption})`}</Typography>
        )}
      </Typography>

      {actionButton}
    </Flex>
  );
};

export default ListItem;
