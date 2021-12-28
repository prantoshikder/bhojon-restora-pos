import { Col, Row } from 'antd';
import React from 'react';
import AddOnsList from '../../components/AddOnsList';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AllAddonsList = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={16} offset={2}>
          <AddOnsList />
        </Col>
      </Row>
    </>
  );
};

export default AllAddonsList;
