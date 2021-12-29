import { Button, Col, Form, Input, message, Radio, Row } from 'antd';
import React, { useState } from 'react';
import './AddonsAdd.style.scss';

const AddonsAdd = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('active');

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

  const handleAddNewAddons = () => {};
  const onFinishFailed = () => {};

  return (
    <div className="addOns-wrapper">
      <Form
        form={form}
        onFinish={handleAddNewAddons}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Row
          // gutter={[48, 0]}
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 1rem',
            marginTop: '3rem',
            boxShadow: 'rgba(0, 0, 0, 0.20) 0px 3px 15px',
          }}
        >
          <Col span={16}>
            <Form.Item label="Add-ons Name" required>
              <Input placeholder="Add-ons Name" size="large" />
            </Form.Item>

            <Form.Item label="Price" required>
              <Input placeholder="Price" size="large" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <div style={{ paddingLeft: '2rem' }}>
              <Form.Item label="Status" valuePropName="checked">
                <Radio.Group onChange={handleChangeStatus} value={value}>
                  <Radio value="active">Active</Radio>
                  <Radio value="inActive">Inactive</Radio>
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
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
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

export default AddonsAdd;
