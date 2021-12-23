import { PictureOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Upload,
} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

const FoodManagement = () => {
  const [form] = Form.useForm();

  const [value, setValue] = useState('');
  const [packageOffer, setPackageOffer] = useState('');

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
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const disabledDateTime = () => {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  };

  const disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={20}>
          <Form form={form} layout="vertical">
            <Row
              gutter={24}
              justify="space-between"
              style={{
                backgroundColor: '#f7f7f7',
                padding: '2rem',
                marginTop: '1rem',
                boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
              }}
            >
              <Col span={16}>
                <Form.Item label="Category name" required>
                  <Input placeholder="category name" />
                </Form.Item>

                <Form.Item
                  name="parent category"
                  label="Parent Category"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Select a option"
                    onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">Lunch Package</Option>
                    <Option value="female">Japanese</Option>
                    <Option value="other">Salad</Option>
                    <Option value="other">Indian Food</Option>
                    <Option value="other">Dinner Package</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Dragger">
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
                </Form.Item>
              </Col>

              <Col span={8}>
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
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FoodManagement;
