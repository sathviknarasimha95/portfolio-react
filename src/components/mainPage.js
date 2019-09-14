import React, { Component } from 'react';

import { Grid, Cell} from 'react-mdl';
import '../App.css';

class MainPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {


  }

  render() {
    return(
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="mainpage-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

              <div className="banner-text">
                <h1>Full Stack Developer</h1>

                <hr />
                <p>JavaScript | React JS | Node JS | D3.js | Android | Dynamo DB</p>
                <div className="social-links">
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default MainPage;
