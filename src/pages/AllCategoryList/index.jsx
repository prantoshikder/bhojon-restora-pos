import { Col } from 'antd';
import CustomRow from 'components/partials/CustomRow';
import React from 'react';
import CategoryList from '../../components/CategoryList';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AllCategoryList = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <CategoryList />
        </Col>
      </CustomRow>
    </>
  );
};

export default AllCategoryList;
