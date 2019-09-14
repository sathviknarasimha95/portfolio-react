import React from 'react';

import MainPage from './mainPage';
import Contact from './contact';
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default MainRoute;
