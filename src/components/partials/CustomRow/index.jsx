import { Row } from 'antd';
import React from 'react';

const CustomRow = ({ children, ...rest }) => {
  return (
    <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }} {...rest}>
      {children}
    </Row>
  );
};

export default CustomRow;
