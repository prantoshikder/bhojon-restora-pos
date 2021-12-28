import { Col, Row } from 'antd';
import React from 'react';
import AddonsList from '../../components/AddonsList/index';
import Heading from '../../components/Heading/index';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AllAddonsList = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)', paddingTop: 83 }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="All Add-ons" />
          <AddonsList />
        </Col>
      </Row>
    </>
  );
};

export default AllAddonsList;
