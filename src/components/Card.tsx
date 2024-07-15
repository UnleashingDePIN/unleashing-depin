import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (<div className="bg-gray-100 rounded-lg shadow-md p-4">{children}</div>);
const CardContent: React.FC<CardProps> = ({ children }) => <div>{children}</div>;

export { Card, CardContent };