import { Col, Row } from 'antd';
import React from 'react';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';
import FoodManagement from '../FoodManagement/index';

const Home = () => {
  return (
    <div>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <FoodManagement />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
