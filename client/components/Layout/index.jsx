import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, RouteHandler, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Layout extends React.Component {
  render() {
    var name = this.context.router.getCurrentPath()
    return (
      <div>
        <Link to="home">
      		home
        </Link>
        <br />
        <Link to="about">
      		about
        </Link>

        <ReactCSSTransitionGroup component="div" transitionName="page">
          <RouteHandler key={name} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Layout.contextTypes = {
  router: React.PropTypes.func.isRequired
}
