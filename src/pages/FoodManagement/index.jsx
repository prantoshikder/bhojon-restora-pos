import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  message,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Upload,
} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

// rowSelection objects indicates the need for row selection
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

const FoodManagement = () => {
  const [form] = Form.useForm();

  const [checkStrictly, setCheckStrictly] = useState(false);

  const [value, setValue] = useState('');
  const [packageOffer, setPackageOffer] = useState('');
  const [color, setColor] = useState('#0f71c5');

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onGenderChange = () => {};

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleOfferInfo = () => {
    setPackageOffer(!packageOffer);
  };

  // Date Picker
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const handleReset = () => {
    message.success({
      content: 'Reset done',
      className: 'custom-class',
      duration: 1,
      style: {
        marginTop: '5vh',
        float: 'right',
      },
    });
  };
  const handleSubmit = () => {
    message.success({
      content: 'Foods category added successfully ',
      className: 'custom-class',
      duration: 1,
      style: {
        marginTop: '5vh',
        float: 'right',
      },
    });
  };

  const fileList = [];

  const columns = [
    {
      title: 'Category Item',
      dataIndex: 'categoryItem',
      key: 'categoryItem',
      render: () => (
        <Image
          src="https://spokeherd.com/wp-content/uploads/2021/06/ingredients-healthy-foods-selection-set-up_35641-3104.jpg"
          width="50px"
          height="50px"
          style={{
            borderRadius: '100%',
            objectFit: 'cover',
          }}
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
      categoryMenu: 'maxican spicy',
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
    <div className="site-card-wrapper">
      <Form form={form} layout="vertical">
        <Row
          gutter={[48, 0]}
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 1rem',
            marginTop: '1rem',
            boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
          }}
        >
          <Col span={16}>
            <Form.Item label="Category name" required>
              <Input placeholder="category name" size="large" />
            </Form.Item>

            <Form.Item
              name="parent category"
              label="Parent Category"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option"
                onChange={onGenderChange}
                size="large"
                allowClear
              >
                <Option value="male">Lunch Package</Option>
                <Option value="female">Japanese</Option>
                <Option value="other">Salad</Option>
                <Option value="other">Indian Food</Option>
                <Option value="other">Dinner Package</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Uoload Category Image">
              <Row>
                <Col span={16}>
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <PictureOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <h1>Preview Image</h1>
                </Col>
              </Row>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Category Background Color"
              tooltip={{
                title:
                  'Change category menu background color that will be shown in the POS',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input
                type="color"
                size="large"
                value={color}
                name="color"
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Category Icon"
              tooltip={{
                title: 'Add category icon',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                // defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item name="offer" valuePropName="checked">
              <Checkbox onClick={handleOfferInfo}>Offer</Checkbox>
            </Form.Item>

            {packageOffer && (
              <Space direction="vertical" size={12}>
                <RangePicker disabledDate={disabledDate} />
              </Space>
            )}

            <Form.Item label="Status" valuePropName="checked">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Active</Radio>
                <Radio value={2}>Inactie</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button
                type=""
                style={{
                  marginRight: '1rem',
                  backgroundColor: '#007023',
                  color: '#fff',
                  borderColor: '#007023',
                }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      {/* Table Component  */}

      <div
        style={{ backgroundColor: '#ddd', marginTop: '5rem', padding: '2rem' }}
      >
        <Table
          columns={columns}
          rowSelection={{ ...rowSelection, checkStrictly }}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default FoodManagement;
