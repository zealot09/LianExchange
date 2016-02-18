import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Coins from '../../actions/coins'
import style from './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import OfficialBuy from '../../components/OfficialBuy'

class Buy extends Component {
  render() {
    const { actions, children, storage } = this.props

    return (
      <div>
        <Header />
        <section className="content">

        </section>
        <Footer />
      </div>
    )
  }
}

// <OfficialBuy />

function mapStateToProps(state) {
  return {
    storage: state.coins
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
)(Buy)
