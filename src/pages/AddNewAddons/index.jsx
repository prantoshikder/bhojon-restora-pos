import { Col } from 'antd';
import CustomRow from 'components/partials/CustomRow';
import React from 'react';
import AddonsAdd from '../../components/AddonsAdd';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const AddNewAddons = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={19}>
          <Heading title="Add New Add-ons" />
          <AddonsAdd />
        </Col>
      </CustomRow>
    </>
  );
};

export default AddNewAddons;
