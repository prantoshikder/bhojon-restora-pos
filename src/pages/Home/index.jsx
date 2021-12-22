import { Button } from 'antd';
import React from 'react';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container">
        <Button type="primary">Click now</Button>
      </div>
    </div>
  );
};

export default Home;
