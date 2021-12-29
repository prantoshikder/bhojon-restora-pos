import { Col, Row } from 'antd';
import React from 'react';
import AddedNewFood from '../../components/AddedNewFood';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AddNewFood = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="Add New Food" />
          <AddedNewFood />
        </Col>
      </Row>
    </>
  );
};

export default AddNewFood;
