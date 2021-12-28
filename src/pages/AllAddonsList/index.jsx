import { Col } from 'antd';
import CustomRow from 'components/partials/CustomRow';
import React from 'react';
import AddonsList from '../../components/AddonsList';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AllAddonsList = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="All Add-ons" />
          <AddonsList />
        </Col>
      </CustomRow>
    </>
  );
};

export default AllAddonsList;
