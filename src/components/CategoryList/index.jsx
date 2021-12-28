import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Image, message, Modal, Space, Table } from 'antd';
import React, { useState } from 'react';
import AddCategory from '../AddCategory/index';
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
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: 'Category Image',
      dataIndex: 'categoryImage',
      key: 'categoryImage',
      render: (text, record) => (
        <Image
          src={record.categoryImage}
          width="50px"
          height="50px"
          className="category-image"
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
      categoryImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      categoryMenu: 'Soup N Salads',
      parentMenu: 'Soup (Thai)',
      status: 'Active',
    },
    {
      key: 2,
      categoryImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      categoryMenu: 'Salad (Thai)',
      parentMenu: 'Chicken item',
      status: 'Active',
    },
    {
      key: 3,
      categoryImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      categoryMenu: 'Prawn & Fish Dishes',
      parentMenu: 'indian',
      status: 'Active',
    },
    {
      key: 4,
      categoryImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      categoryMenu: 'Oven Roasted Eggplant',
      parentMenu: 'thai',
      status: 'Active',
    },
    {
      key: 5,
      categoryImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      categoryMenu: 'Maxican spicy',
      parentMenu: 'Chicken item',
      status: 'Active',
    },
  ];

  function handleEditCategory(record) {
    setVisible(true);
    console.log('Edit', record);
    // message.success({
    //   content: 'Foods category added successfully ',
    //   className: 'custom-class',
    //   duration: 1,
    //   style: {
    //     marginTop: '5vh',
    //     float: 'right',
    //   },
    // });
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
    <>
      <div
        style={{
          backgroundColor: '#f7f7f7',
          marginTop: '3rem',
          padding: '2rem',
          boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
        }}
      >
        <Table
          columns={columns}
          rowSelection={{ ...rowSelection, checkStrictly }}
          dataSource={data}
          pagination={false}
        />
      </div>

      <Modal
        title="Update Category"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div style={{ padding: '2rem' }}>
          <AddCategory />
        </div>
      </Modal>
    </>
  );
};

export default CategoryList;
