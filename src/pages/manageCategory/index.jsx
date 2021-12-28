import React from 'react';
import AddOnsAdd from '../manageAddOns/AddOnsAdd';
import AddOnsList from '../manageAddOns/AddOnsList/index';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';

const FoodManagement = () => {
  return (
    <>
      <AddCategory />

      <CategoryList />

      <AddOnsAdd />
      <AddOnsList />
    </>
  );
};

export default FoodManagement;
