import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const Sidebar = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div style={{ height: '100%' }}>
      <Menu
        style={{
          width: 256,
          backgroundColor: '#020730',
          color: '#fff',
          height: '100%',
        }}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Menu.Item
          key="sub1"
          icon={<MailOutlined />}
          // style={{
          //   backgroundColor: '#007023',
          //   color: '#fff',
          //   width: '100%',
          // }}
        >
          All Category
        </Menu.Item>

        <Menu.Item key="1">Fast Food Item</Menu.Item>

        <SubMenu
          key="sub2"
          icon={<MailOutlined style={{ color: '#fff' }} />}
          title="Soup"
        >
          <Menu.Item key="2">Thai Soup</Menu.Item>
          <Menu.Item key="3">Soup</Menu.Item>
        </SubMenu>

        <Menu.Item key="4">Salad Thai</Menu.Item>
        <Menu.Item key="5">Chicken Sharma</Menu.Item>
        <Menu.Item key="6">Chowmein</Menu.Item>

        <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Demo">
          <Menu.Item key="7">Option 6</Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" icon={<SettingOutlined />} title="Chicken Item">
          <Menu.Item key="8">Option 9</Menu.Item>
          <Menu.Item key="9">Option 10</Menu.Item>
          <Menu.Item key="10">Option 11</Menu.Item>
          <Menu.Item key="11">Option 12</Menu.Item>
        </SubMenu>

        <Menu.Item key="12">Appetizer</Menu.Item>
        <Menu.Item key="13">Salad</Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
