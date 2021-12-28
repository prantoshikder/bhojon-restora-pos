import { Col } from 'antd';
import AddedNewFood from 'components/AddedNewFood';
import React from 'react';
import Heading from '../../components/Heading';
import CustomRow from '../../components/partials/CustomRow';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AddNewFood = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="Add New Food" />
          <AddedNewFood />
        </Col>
      </CustomRow>
    </>
  );
};

export default AddNewFood;
