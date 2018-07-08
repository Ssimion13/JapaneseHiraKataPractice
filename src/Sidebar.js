import React, { Component } from 'react'
import { Button,  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Switch,Link, Route} from "react-router-dom"
import HiraganaTest from "./HiraganaTest"
import HomePage from "./HomePage"
import LanguageChart from "./LanguageChart"

export default class SidebarComponent extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <div className="navbar">
        <Button className="topButton" onClick={this.handleButtonClick}> 三 </Button>
          <div className="navbarTitleDiv" >
            <h2> You Can Learn Japanese! </h2>
          </div>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onClick={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item>
              <Link to="./" >
              <Icon name='home' /> <br/>
              Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/HiraganaTest">
              <Icon name='book' /> <br/>
              Hiragana <br/>
              Katakana <br/>
              Kanji <br/> 
              Quiz
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/LanguageChart">
              <Icon name='clipboard' /> <br/>
              Language <br/> 
              Charts
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Switch>
              <Route path="/HiraganaTest" component={HiraganaTest} />
              <Route path="/LanguageChart" component={LanguageChart} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
