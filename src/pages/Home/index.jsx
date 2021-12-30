import { Col } from 'antd';
import React from 'react';
import CustomRow from '../../components/partials/CustomRow';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const Home = () => {
  return (
    <>
      <CustomRow>
        <Col span={4}>
          <Sidebar home />
        </Col>

        <Col span={19}>
          <Header />
          <h1>Coming soon</h1>
        </Col>
      </CustomRow>
    </>
  );
};

export default Home;
