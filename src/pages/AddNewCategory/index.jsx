import { Col } from 'antd';
import CustomRow from 'components/partials/CustomRow';
import React from 'react';
import AddCategory from '../../components/AddCategory';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AddNewCategory = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="Add New Category" />
          <AddCategory />
        </Col>
      </CustomRow>
    </>
  );
};

export default AddNewCategory;
