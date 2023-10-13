import './index.css';
import { Card as AntdCard } from 'antd';
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <AntdCard
      id='form-card'
      title={title}
    >
      {children}
    </AntdCard>
  );
};

export default Card;
