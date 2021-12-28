import { Col } from 'antd';
import CustomRow from 'components/partials/CustomRow';
import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const Report = () => {
  return (
    <>
      <Header />

      <CustomRow>
        <Col span={4}>
          <Sidebar />
        </Col>

        <Col span={19}>
          <Heading title="Reports" />
          <h1>Coming soon</h1>
        </Col>
      </CustomRow>
    </>
  );
};

export default Report;
