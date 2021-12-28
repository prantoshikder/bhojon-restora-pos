import { Col, Row } from 'antd';
import React from 'react';
import AddonsAdd from '../../components/AddonsAdd';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AddNewAddons = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <AddonsAdd />
        </Col>
      </Row>
    </>
  );
};

export default AddNewAddons;
