import { Col, Row } from 'antd';
import React from 'react';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const Report = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar home />
        </Col>

        <Col span={19}>
          <h1>Coming soon</h1>
        </Col>
      </Row>
    </>
  );
};

export default Report;
