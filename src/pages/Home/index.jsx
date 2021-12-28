import { Col, Row } from 'antd';
import React from 'react';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';
import FoodManagement from '../manageCategory/index';

const Home = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={16} offset={2}>
          <FoodManagement />
        </Col>
      </Row>
    </>
  );
};

export default Home;
