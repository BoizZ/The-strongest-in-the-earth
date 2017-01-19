import * as React from 'react'
import { render } from 'react-dom'
import {
    Router,
    Route,
    hashHistory
} from 'react-router'
import {
  Layout
} from 'antd'
import Navi from './components/Navi'
import Notificat from './views/Notificat'
import Mail from './views/Mail'
import Attendance from './views/Attendance'
import 'antd/dist/antd.css'
import './style/style.scss'

const { Sider, Content, Footer } = Layout

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed: Boolean) => {
    this.setState({ collapsed })
  }

  public render(): JSX.Element {
    return (
      <Layout className = 'layout-wrap'>
        <Sider
          collapsible
          collapsed = {this.state.collapsed}
          onCollapse = {this.onCollapse}
          className = 'layout-side'
        >
          <div className = 'logo'></div>
          <Navi />
        </Sider>
        <Content className = 'layout-body'>
          <Content className = 'layout-content'>
            <Router history = {hashHistory}>
              <Route
                path = '/'
                components = {Notificat}
              />
              <Route
                path = '/mail'
                components = {Mail}
              />
              <Route
                path = '/attendance'
                components = {Attendance}
              />
            </Router>
          </Content>
          <Footer>地球最强作战部队考勤和事务管理平台. Copyright © <a href = 'https://github.com/BoizZ/The-strongest-in-the-earth' target = '_blank'>我很帅，不服来战</a></Footer>
        </Content>
      </Layout>
    )
  }
}

render(<App />, document.getElementById('app'))
