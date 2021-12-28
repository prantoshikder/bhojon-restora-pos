import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#0f71c5',
        width: '100%',
        padding: '1rem 0.4rem',
      }}
    >
      <div>
        <Button style={{ marginRight: '0.8rem' }}>
          <Link to="/">POS System</Link>
        </Button>
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
