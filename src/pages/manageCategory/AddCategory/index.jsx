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
  const [value, setValue] = useState('');
  const [color, setColor] = useState('#0f71c5');
  const [packageOffer, setPackageOffer] = useState('');

  const onGenderChange = () => {};

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

  const onChange = (e) => {
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

            <Form.Item name="parent category" label="Parent Category">
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
    </div>
  );
};

export default AddCategory;
