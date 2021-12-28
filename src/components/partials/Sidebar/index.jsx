import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const Sidebar = ({ home }) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div
      style={{ height: 'calc(100vh - 83px)', width: 256, position: 'fixed' }}
    >
      {home ? (
        <Menu
          theme="dark"
          style={{
            height: '100%',
          }}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.Item key="sub1">All Category</Menu.Item>

          <Menu.Item key="1">Fast Food Item</Menu.Item>

          <SubMenu key="sub2" title="Soup">
            <Menu.Item key="2">Thai Soup</Menu.Item>
            <Menu.Item key="3">Soup</Menu.Item>
          </SubMenu>

          <Menu.Item key="4">Salad Thai</Menu.Item>
          <Menu.Item key="5">Chicken Sharma</Menu.Item>
          <Menu.Item key="6">Chowmein</Menu.Item>
        </Menu>
      ) : (
        <Menu
          theme="dark"
          style={{
            height: '100%',
          }}
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <SubMenu key="food_management" title="Food Management">
            <Menu.Item key="add_new_food:1">
              <Link to="/add-new-food">Add New Food</Link>
            </Menu.Item>

            <SubMenu key="manage_category" title="Manage Category">
              <Menu.Item key="manage_category:1">
                <Link to="/add-new-category">Add New Category</Link>
              </Menu.Item>
              <Menu.Item key="manage_category:2">
                <Link to="/category-list">All Categories</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="manage_addons" title="Manage Add-ons">
              <Menu.Item key="manage_addons:1">
                <Link to="/add-new-addons">Add New Addons</Link>
              </Menu.Item>
              <Menu.Item key="manage_addons:2">
                <Link to="/addons-list">All Addons Lists</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          <Menu.Item key="reports">
            <Link to="/report">Reports</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Sidebar;
