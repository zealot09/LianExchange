import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Mask from '../../components/Mask'

import * as Coins from '../../actions/coins'
import style from './style.css'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props

    return (
      <div>
        <Mask {...this.props.loading}/>
        <Header />
        {this.props.children}
        <Footer {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    storage: state.coins,
    loading: state.handleLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Coins, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
