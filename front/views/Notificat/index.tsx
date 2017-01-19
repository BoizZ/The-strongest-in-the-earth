import * as React from 'react'
import {
  Card,
  Calendar,
  Collapse,
  Row,
  Col
} from 'antd'
import { notificat, calender } from './config'
const Panel = Collapse.Panel

interface INotificatProps {}
interface INotificatState {}

class Notificat extends React.Component<INotificatProps, INotificatState> {
  dateCellRender = (value: any) => {
    const year = value.year().toString()
    const month = (value.month() + 1).toString()
    const date = value.date().toString()
    const matters = calender.find(item => {
      const dateArr = item.date && item.date.split('-')
      return dateArr[0] === year && dateArr[1] === month && dateArr[2] === date
    })
    const mattersItem = matters ? matters.items : []
    return (
      <ul className = 'calender-info'>
        {mattersItem.map(item => <li className = {item.type}>{item.content}</li>)}
      </ul>
    )
  }

  public render(): JSX.Element {
    return (
      <div className = 'notificat'>
        <Row gutter={16} type="flex">
          <Col span = {18}>
            <Card>
              <Calendar dateCellRender={this.dateCellRender}/>
            </Card>
          </Col>
          <Col span = {6}>
            <Collapse accordion defaultActiveKey={['1']}>
              {
                notificat.map((item, index) => <Panel header = {item.title} key = {(index + 1).toString()}>
                  <div dangerouslySetInnerHTML = {{__html: item.content}}></div>
                </Panel>)
              }
            </Collapse>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Notificat
