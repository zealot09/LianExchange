import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Modal from 'react-modal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Mask from '../../components/Mask'

import * as Coins from '../../actions/coins'
import style from './style.local.css'

//custom alert dialog style
const customStyle = {
  content : {
   top : '50%',
   left : '50%',
   right : 'auto',
   bottom : 'auto',
   marginRight : '-50%',
   transform : 'translate(-50%, -50%)'
 }
}

class App extends Component {
  closeAlert() {
    console.log('close alert')
  }
  openAlert() {
    console.log('open alert')
  }
  render() {
    const { todos, actions, children } = this.props
    return (
      <div>
        <Mask {...this.props.state.loadingStore}/>
        <Header />
        {this.props.children}
        <Footer {...this.props}/>
          <Modal isOpen={this.props.state.loadingStore.alert.isShowAlert}
                 onRequestClose={this.closeAlert}
                 style={customStyle}>
            <h2>好像已经断网了</h2>
            <p>{this.props.state.loadingStore.alert.message}</p>
            <a href="javascript:;" onClick={actions.hideAlert}>好的</a>
          </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
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
