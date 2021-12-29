import { InfoCircleOutlined, PictureOutlined } from '@ant-design/icons';
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

const { RangePicker } = DatePicker;
const { Option } = Select;

const AddedNewFood = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('active');
  const [menuType, setMenuType] = useState('');
  const [packageOffer, setPackageOffer] = useState('');

  const handleSelectCategory = () => {};
  const handleKitchenSelect = () => {};

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
    console.log('status', e.target.value);
    setValue(e.target.value);
  };

  const changesMenuType = (e) => {
    console.log('menuType', e.target.value);
    setMenuType(e.target.value);
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
    <>
      <Form
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Row
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 1rem',
            marginTop: '3rem',
            boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
          }}
        >
          <Col span={12}>
            <Form.Item
              label="Food Name"
              name="foodName"
              rules={[
                {
                  required: true,
                  message: 'Food name is required',
                },
              ]}
              required
            >
              <Input placeholder="Food Name" size="large" />
            </Form.Item>

            <Form.Item name="select category" label="Select Category">
              <Select
                placeholder="Select a category"
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

            <Form.Item name="select kitchen" label="Select Kitchen">
              <Select
                placeholder="Select a kitchen"
                onChange={handleKitchenSelect}
                size="large"
                allowClear
              >
                <Option value="kitchen:1">Common</Option>
                <Option value="kitchen:2">MAIN</Option>
                <Option value="kitchen:3">Mexican</Option>
                <Option value="kitchen:4">Italian</Option>
                <Option value="kitchen:5">Chinese</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Upload Food Image">
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

          <Col span={12}>
            <div style={{ paddingLeft: '2rem' }}>
              <Form.Item label="Description">
                <Input.TextArea placeholder="Description" size="large" />
              </Form.Item>

              <Form.Item
                label="Vat"
                tooltip={{
                  title: 'Vat are always calculate percent like:5 means:5%',
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input placeholder="Vat" size="large" />
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

              <Form.Item label="Menu Type" valuePropName="checked">
                <Radio.Group onChange={changesMenuType} value={menuType}>
                  <Radio value="party">Party</Radio>
                  <Radio value="coffee">Coffee</Radio>
                  <Radio value="dinner">Dinner</Radio>
                  <Radio value="lunch">Lunch</Radio>
                  <Radio value="breakFast">Breakfast</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  type="danger"
                  style={{
                    marginRight: '1rem',
                  }}
                  onClick={handleReset}
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
    </>
  );
};

export default AddedNewFood;
