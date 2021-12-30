import { Col } from 'antd';
import React from 'react';
import CategoryList from '../../components/CategoryList';
import Heading from '../../components/Heading';
import CustomRow from '../../components/partials/CustomRow';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AllCategoryList = () => {
  return (
    <>
      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Header />
          <Heading title="All Category List" />
          <CategoryList />
        </Col>
      </CustomRow>
    </>
  );
};

export default AllCategoryList;
