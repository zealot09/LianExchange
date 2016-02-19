import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Coins from '../../actions/coins'
import style from './style.css'
import OfficialBuy from '../../components/OfficialBuy'

class Buy extends Component {
  render() {
    const { actions, children, storage } = this.props
    return (
      <div>
        <section className="content">
          <OfficialBuy />
        </section>
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
