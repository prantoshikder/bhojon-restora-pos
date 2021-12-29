import {
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
  Input,
  message,
  Radio,
  Row,
  Select,
  Space,
  Upload,
} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import './AddCategory.style.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;

const AddCategory = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('active');
  const [color, setColor] = useState('#0f71c5');
  const [packageOffer, setPackageOffer] = useState('');

  const handleSelectCategory = () => {};

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const fileList = [];

  const handleOfferInfo = () => {
    setPackageOffer(!packageOffer);
  };

  // Date Picker
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const handleChangeStatus = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="site-card-wrapper">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 1rem',
            marginTop: '3rem',
            boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
          }}
        >
          <Col span={16}>
            <Form.Item
              label="Category name"
              name="categoryName"
              rules={[
                {
                  required: true,
                  message: 'Category name is required',
                },
              ]}
            >
              <Input placeholder="Category Name" size="large" />
            </Form.Item>

            <Form.Item name="parent category" label="Parent Category">
              <Select
                placeholder="Select an Option"
                onChange={handleSelectCategory}
                size="large"
                allowClear
              >
                <Option value="lunch_package">Lunch Package</Option>
                <Option value="japanese">Japanese</Option>
                <Option value="salad">Salad</Option>
                <Option value="indian_food">Indian Food</Option>
                <Option value="dinner_package">Dinner Package</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Upload Category Image">
              <Row gutter={20}>
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
                  <h4>Preview Image</h4>
                </Col>
              </Row>
            </Form.Item>
          </Col>

          <Col span={8}>
            <div style={{ paddingLeft: '2rem' }}>
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
                  defaultFileList={[...fileList]}
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
                <Radio.Group onChange={handleChangeStatus} value={value}>
                  <Radio value="active">Active</Radio>
                  <Radio value="inActive">Inactive</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  style={{
                    marginRight: '0.6rem',
                  }}
                  onClick={handleReset}
                  danger
                >
                  Reset
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCategory;
