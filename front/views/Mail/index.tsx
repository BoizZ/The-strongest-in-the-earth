import * as React from 'react'
import {
  Card,
  Row,
  Col,
  Button
} from 'antd'
import * as moment from 'moment'
import Info from './Info'
import { mailType } from './config'

interface IMailProps {}
interface IMailState {
  loading: boolean
  values?: {
    appellation?: string,
    name?: string,
    type?: string,
    date?: Object[],
    startTime?: string,
    endTime?: string,
    diffTime?: Number,
    description?: string
  }
}

class Mail extends React.Component<IMailProps, IMailState> {
  private form: any

  constructor (props: IMailProps) {
    super(props)
    this.state = {
      loading: true
    }
  }

  handleGenerat = (values?: Object) => {
    const loading = values ? true : false
    this.setState({
      loading: loading,
      values: values
    })
  }

  public render(): JSX.Element {
    const values = this.state.values || {}
    let sendType: any = mailType.find(item => item.key === values.type)
    sendType = sendType && sendType.name
    console.log(values)
    return (
      <Row>
        <Col
          span = {8}
        >
          <Info
            ref = {(ref) => this.form = ref}
            handleGenerat = {this.handleGenerat}
          />
        </Col>
        <Col
          span = {16}
        >
          <Card
            title = '邮件模板'
            loading = {this.state.loading}
          >
            <h2
              style = {{
                marginBottom: '20px'
              }}
            >{`${sendType}申请 - ${values.name}`}</h2>
            <div>
              <p>Dear {values.appellation}：</p>
              <p style = {{textIndent: '2em'}}>{`${sendType}时间：${values.startTime} - ${values.endTime}`}</p>
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Mail