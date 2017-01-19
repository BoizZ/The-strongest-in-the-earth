import * as React from 'react'
import {
  Form,
  Select,
  Input,
  DatePicker
} from 'antd'
import * as moment from 'moment'
import { mailType } from './config'

const { RangePicker } = DatePicker

interface IInfoProps {
  form?: any,
  handleGenerat: any
}
interface IInfoState {}

class Info extends React.Component<IInfoProps, IInfoState> {
  componentWillReceiveProps () {
    const values = this.props.form.getFieldsValue
    if (values.date) {
      values.startTime = moment(values.date[0]).format('LLL')
      values.endTime = moment(values.date[1]).format('LLL')
      values.diffTime = (values.date[1] - values.date[0]) / (1000 * 60 * 60 * 24)
    }
    this.props.handleGenerat(values)
  }

  public render(): JSX.Element {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    return (
      <Form>
        <Form.Item
          label = '邮件主题'
          {...formItemLayout}
        >
          {getFieldDecorator('type', {
            initialValue: mailType[0].key,
            rules: [
              {
                required: true
              }
            ]
          })(
            <Select>
              {mailType.map(item => <Select.Option key = {item.key} value = {item.key}>{item.name}</Select.Option>)}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label = '发件人姓名'
          {...formItemLayout}
        >
          {getFieldDecorator('name', {
            rules: [
              {
                required: true
              }
            ]
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label = '收件人称谓'
          {...formItemLayout}
        >
          {getFieldDecorator('appellation', {
            rules: [
              {
                required: true
              }
            ]
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label = '时间'
          {...formItemLayout}
        >
          {getFieldDecorator('date', {
            rules: [
              {
                required: true
              }
            ]
          })(
            <RangePicker
              showTime
              format= 'YYYY-MM-DD HH:mm:ss'
              style = {{
                width: '100%'
              }}
            />
          )}
        </Form.Item>
        <Form.Item
          label = '原因'
          {...formItemLayout}
        >
          {getFieldDecorator('description')(
            <Input type = 'textarea' />
          )}
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(Info)