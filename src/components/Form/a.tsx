import React from 'react';
import { Button, Checkbox, Form, Input, Switch, Upload } from 'antd';
import Questions from '../Questions';
import './index.css';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PersonalInput = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='personal-input'>
      <div>{label}</div>
      <div className='personal-input-children-style'>{children}</div>
    </div>
  );
};

const Form2 = () => {
  return (
    <Form initialValues={{ name: 'Manan', a: { b: 'value' } }}>
      <div className='form-container'>
        <Form.Item name='name'>
          <Input />
        </Form.Item>
        <Form.Item name={['a', 'b']}>
          <Input />
        </Form.Item>
        <Questions label='Upload Cover Image'>
          <Form.Item valuePropName='cover-image' getValueFromEvent={normFile}>
            <Upload listType='picture-card'>
              <div>
                {/* <PlusOutlined /> */}
                <div className='upload-text-style'>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Questions>
        <Questions label='Personal Information'>
          <PersonalInput label='First Name'>
            <Checkbox />
            <Switch />
          </PersonalInput>
        </Questions>
      </div>
    </Form>
  );
};

const Form3: React.FC = () => (
  <Form
    name='basic'
    layout='vertical'
    className='form3-container'
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete='off'
  >
    <Form.Item<FieldType>
      label='Username'
      name='username'
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    Upload Cover Image
    <Form.Item
      label='Upload Cover Image'
      valuePropName='cover-image'
      getValueFromEvent={normFile}
    >
      <Upload listType='picture-card'>
        <div>
          {/* <PlusOutlined /> */}
          <div className='upload-text-style'>Upload</div>
        </div>
      </Upload>
    </Form.Item>
    Personal Information
    <Form.Item label='First Name' valuePropName='first-name'>
      <Checkbox />
      <Switch />
    </Form.Item>
    <Form.Item label='Last Name' valuePropName='last-name'>
      <Input type='text' />
    </Form.Item>
    <Form.Item label='Email Name' valuePropName='email'>
      <Input type='email' />
    </Form.Item>
    <Form.Item label='Phone' valuePropName='phone'>
      <Input type='tel' />
    </Form.Item>
    <Form.Item label='Nationality' valuePropName='nationality'>
      <Input />
    </Form.Item>
    <Form.Item label='Current Residence' valuePropName='current-residence'>
      <Input />
    </Form.Item>
    <Form.Item label='ID Number' valuePropName='id-number'>
      <Input />
    </Form.Item>
    <Form.Item label='Date of Birth' valuePropName='date-of-birth'>
      <Input />
    </Form.Item>
    <Form.Item label='Gender' valuePropName='gender'>
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Form2;
