import React, { Component } from 'react'
import { Button,  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Switch,Link, Route} from "react-router-dom"
import HiraganaTest from "./HiraganaTest/"
import HomePage from "./HomePage"
import LanguageChart from "./LanguageChart/"
import JapaneseLessons from "./JapaneseLessons/"
import BasicGrammar from "./JapaneseLessons/Section2/BasicGrammar";
import BasicSentenceStructure from "./JapaneseLessons/Section2/BasicSentenceStructure";
import Intro from "./JapaneseLessons/Section1/Intro";
import HiraganaBasics from "./JapaneseLessons/Section1/HiraganaBasics";
import HiraganaBasics2 from "./JapaneseLessons/Section1/HiraganaBasics2";
import KatakanaBasics from "./JapaneseLessons/Section1/KatakanaBasics";
import IntroductionToKanji from "./JapaneseLessons/Section1/IntroductionToKanji";


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
          <h2 className="navbarTitle"> Japanese On The Go! </h2>
        </div>
        <div className="holder">  </div>  
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
              <Link to="/" >
              <Icon name='home' /> <br/>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/JapaneseLessons">
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
              <Route path="/JapaneseLessons" component={JapaneseLessons} />
              <Route path="/Section2/BasicGrammar" component={BasicGrammar} />
              <Route path="/Section2/BasicSentenceStructure" component={BasicSentenceStructure} />
              <Route path="/Section1/HiraganaBasics" component={HiraganaBasics} />
              <Route path="/Section1/HiraganaBasics2" component={HiraganaBasics2} />
              <Route path="/Section1/KatakanaBasics" component={KatakanaBasics} />
              <Route path="/Section1/IntroductionToKanji" component={IntroductionToKanji} />
              <Route path="/Section1/Intro" component={Intro} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
