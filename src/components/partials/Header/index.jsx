import { Button } from 'antd';
import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#0f71c5',
        width: '100%',
        padding: '3rem 1.2rem 1rem',
      }}
    >
      <div>
        <Button style={{ marginRight: '0.8rem' }}>POS Order</Button>
        <Button style={{ marginRight: '0.8rem' }}>Ongoing Order</Button>
        <Button style={{ marginRight: '0.8rem' }} disabled>
          Today Order
        </Button>
        <Button style={{ marginRight: '0.8rem' }} disabled>
          Online Order
        </Button>
      </div>
    </div>
  );
};

export default Header;
