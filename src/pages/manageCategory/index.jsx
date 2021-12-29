import { Col } from 'antd';
import React from 'react';
import AddCategory from '../../components/AddCategory';
import CustomRow from '../../components/partials/CustomRow';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const FoodManagement = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <AddCategory />
        </Col>
      </CustomRow>
    </>
  );
};

export default FoodManagement;
