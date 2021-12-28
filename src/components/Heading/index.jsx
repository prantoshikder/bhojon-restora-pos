import { Typography } from 'antd';
import React from 'react';
import './Heading.style.scss';

const { Title } = Typography;

const Heading = ({ title, ...rest }) => {
  return (
    <Title className="heading" level={3} {...rest}>
      {title}
    </Title>
  );
};

export default Heading;
