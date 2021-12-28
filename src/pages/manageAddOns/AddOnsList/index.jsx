import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Image, message, Space, Table } from 'antd';
import React, { useState } from 'react';
import './AddOnsList.style.scss';

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

const AddOnsList = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  const columns = [
    {
      title: 'Add-ons Image',
      dataIndex: 'addOnsImage',
      key: 'addOnsImage',
      render: (text, record) => (
        <Image
          src={record.addOnsImage}
          width="50px"
          height="50px"
          className="addOns-image"
        />
      ),
    },
    {
      title: 'Add-ons Name',
      dataIndex: 'addOnsName',
      key: 'addOnsName',
      width: '30%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '20%',
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
      addOnsImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      addOnsName: 'Soup N Salads',
      price: '	15',
      status: 'Active',
    },
    {
      key: 2,
      addOnsImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      addOnsName: 'Salad (Thai)',
      price: '25',
      status: 'Active',
    },
    {
      key: 3,
      addOnsImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      addOnsName: 'Prawn & Fish Dishes',
      price: '35',
      status: 'Active',
    },
    {
      key: 4,
      addOnsImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      addOnsName: 'Oven Roasted Eggplant',
      price: '50',
      status: 'Active',
    },
    {
      key: 5,
      addOnsImage:
        'https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg',
      addOnsName: 'Maxican spicy',
      price: '20',
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
        pagination={false}
      />
    </div>
  );
};

export default AddOnsList;
