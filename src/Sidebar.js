import React, { Component } from 'react'
import { Button,  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Switch,Link, Route} from "react-router-dom"
import HiraganaTest from "./HiraganaTest/"
import HomePage from "./HomePage"
import LanguageChart from "./LanguageChart/"
import BasicJapanese from "./BasicJapanese/"
import BasicGrammar from "./BasicJapanese/Section1/BasicGrammar";
import BasicSentenceStructure from "./BasicJapanese/Section1/BasicSentenceStructure";
import Intro from "./BasicJapanese/Section1/Intro";
import HiraganaBasics from "./BasicJapanese/Section1/HiraganaBasics";

export default class SidebarComponent extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <div className="navbar">
        <Button className="topButton" onClick={this.handleButtonClick}> Menu </Button>
        <div className="navbarTitleDiv">
        <h2 className="navbarTitleDiv"> Japanese On The Go! </h2>
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
              <Link to="/BasicJapanese">
              <Icon name='clipboard' /> <br/>
              Basic <br/>
              Japanese
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
            <Switch className="app">
              <Route path="/HiraganaTest" component={HiraganaTest} />
              <Route path="/LanguageChart" component={LanguageChart} />
              <Route path="/BasicJapanese" component={BasicJapanese} />
              <Route path="/Section1/BasicGrammar" component={BasicGrammar} />
              <Route path="/Section1/BasicSentenceStructure" component={BasicSentenceStructure} />
              <Route path="/Section1/HiraganaBasics" component={HiraganaBasics} />
              <Route path="/Section1/Intro" component={Intro} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
