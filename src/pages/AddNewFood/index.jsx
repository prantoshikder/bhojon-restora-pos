import { Col } from 'antd';
import React from 'react';
import CustomRow from '../../components/partials/CustomRow';
import Header from '../../components/partials/Header/index';
import Sidebar from '../../components/partials/Sidebar/index';

const AddNewFood = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <h1>Coming Soon</h1>
        </Col>
      </CustomRow>
    </>
  );
};

export default AddNewFood;
