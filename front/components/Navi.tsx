import * as React from 'react'
import {
  Menu,
  Icon
} from 'antd'

interface INaviProps {}
interface INaviState {}

class Navi extends React.Component<INaviProps, INaviState> {
  public render(): JSX.Element {
    
    return (
      <Menu
        theme = 'dark'
        mode = "inline"
        defaultSelectedKeys = {['notification']}
      >
        <Menu.Item key = 'notification'>
          <a href = '/#/'>
            <Icon type = 'notification' />
            <span className = 'nav-text'>公告栏</span>
          </a>
        </Menu.Item>
        <Menu.Item key = 'mail'>
          <a href = '/#/mail'>
            <Icon type = 'mail' />
            <span className = 'nav-text'>邮件模板</span>
          </a>
        </Menu.Item>
        <Menu.Item key="attendance">
          <a href = '/#/attendance'>
            <Icon type = 'solution' />
            <span className = 'nav-text'>考勤</span>
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navi
