import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Image, message, Space, Table } from 'antd';
import React, { useState } from 'react';
import './CategoryList.style.scss';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const CategoryList = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  const columns = [
    {
      title: 'Category Image',
      dataIndex: 'categoryImage',
      key: 'categoryImage',
      render: () => (
        <Image
          src="https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg"
          width="50px"
          height="50px"
          className="category-image"
          // preview={false}
        />
      ),
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryMenu',
      key: 'categoryMenu',
      width: '30%',
    },
    {
      title: 'Parent Menu',
      dataIndex: 'parentMenu',
      key: 'parentMenu',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '15%',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '20%',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditCategory(record)}>
            <EditOutlined />
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDeleteCategory(record)}>
            <DeleteOutlined />
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      categoryMenu: 'Soup N Salads',
      parentMenu: '	Soup (Thai)',
      status: 'Active',
    },
    {
      key: 2,
      categoryMenu: 'Salad (Thai)',
      parentMenu: 'Chicken item',
      status: 'Active',
    },
    {
      key: 3,
      categoryMenu: 'Prawn & Fish Dishes',
      parentMenu: 'indian',
      status: 'Active',
    },
    {
      key: 4,
      categoryMenu: 'Oven Roasted Eggplant',
      parentMenu: 'thai',
      status: 'Active',
    },
    {
      key: 5,
      categoryMenu: 'Maxican spicy',
      parentMenu: 'Chicken item',
      status: 'Active',
    },
  ];

  function handleEditCategory(record) {
    console.log('Edit', record);
    message.success({
      content: 'Foods category added successfully ',
      className: 'custom-class',
      duration: 1,
      style: {
        marginTop: '5vh',
        float: 'right',
      },
    });
  }
  function handleDeleteCategory(record) {
    console.log('Delete', record);
    message.success({
      content: 'Foods category added successfully ',
      className: 'custom-class',
      duration: 1,
      style: {
        marginTop: '5vh',
        float: 'right',
      },
    });
  }

  return (
    <div
      style={{ backgroundColor: '#ddd', marginTop: '5rem', padding: '2rem' }}
    >
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </div>
  );
};

export default CategoryList;
