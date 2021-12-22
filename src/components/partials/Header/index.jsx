import { Button } from 'antd';
import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#f1f1f1',
        width: '100%',
        padding: '1rem 0.4rem',
      }}
    >
      <div>
        <Button>POS Order</Button>
        <Button>Ongoing Order</Button>
        <Button disabled>Today Order</Button>
        <Button disabled>Online Order</Button>
      </div>
    </div>
  );
};

export default Header;