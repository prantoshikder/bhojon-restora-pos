import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#0f71c5',
        width: '100%',
        padding: '2.5rem 1.2rem 0.7rem',
        zIndex: 1,
        position: 'fixed',
      }}
    >
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
  );
};

export default Header;
