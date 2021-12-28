import { Col, Row } from 'antd';
import React from 'react';
import AddCategory from '../../components/AddCategory/index';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AddNewCategory = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <AddCategory />
        </Col>
      </Row>
    </>
  );
};

export default AddNewCategory;
