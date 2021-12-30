import { Row } from 'antd';
import React from 'react';

const CustomRow = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default CustomRow;
