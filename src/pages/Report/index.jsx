import { Col, Row } from 'antd';
import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const Report = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }}>
        <Col span={4}>
          <Sidebar />
        </Col>

        <Col span={19}>
          <Heading title="Reports" />
          <h1>Coming soon</h1>
        </Col>
      </Row>
    </>
  );
};

export default Report;
