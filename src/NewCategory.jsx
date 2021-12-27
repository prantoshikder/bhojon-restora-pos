import React from 'react';
import { Link } from 'react-router-dom';

const NewCategory = () => {
  console.log('this is new category page');
  return (
    <>
      <Link to="/">Go Home</Link>
      <div>New Category</div>
    </>
  );
};

export default NewCategory;
