import { Col, Row } from 'antd';
import React from 'react';
import AddonsAdd from '../../components/AddonsAdd';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AddNewAddons = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="Add New Add-ons" />
          <AddonsAdd />
        </Col>
      </Row>
    </>
  );
};

export default AddNewAddons;
