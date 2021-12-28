import { Col, Row } from 'antd';
import React from 'react';
import AddOnsAdd from '../../components/AddOnsAdd';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AddNewAddons = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <AddOnsAdd />
        </Col>
      </Row>
    </>
  );
};

export default AddNewAddons;
