import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import HiraganaTest from "./HiraganaTest"

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
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='book' />
              Hiragana <br/>
              Katakana <br/>
              Kanji <br/> 
              Quiz
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
              <HiraganaTest />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
