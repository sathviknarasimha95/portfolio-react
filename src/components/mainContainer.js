import React, { Component } from 'react';
import '../App.css';

import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import MainRoute from './mainRoute';

import { Link } from 'react-router-dom';


class MainContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render(){
    return(
      <div className="main-container">
        <div className="demo-big-content">
          <Layout>
              <Header className="header-gradient" title="Title" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <MainRoute />
              </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default MainContainer;
