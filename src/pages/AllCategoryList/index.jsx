import { Col, Row } from 'antd';
import CategoryList from 'components/CategoryList';
import React from 'react';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AllCategoryList = () => {
  return (
    <>
      <Header />

      <Row style={{ height: 'calc(100vh - 64px)' }}>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={16} offset={2}>
          <CategoryList />
        </Col>
      </Row>
    </>
  );
};

export default AllCategoryList;
