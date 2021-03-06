import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Lifecycle } from 'react-router'
import * as Coins from '../../actions/coins'
import style from './style.local.css'
import OfficialBuy from '../../components/OfficialBuy'
import MarketBuy from '../../components/MarketBuy'
import BuyOfficialDialog from '../../components/BuyOfficialDialog'

// @Lifecycle
class Buy extends Component {
  // mixins: [ Lifecycle ],
  // componentDidMount() {
  //   this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  // }
  constructor(props) {
    super(props)
  }
  routerWillLeave() {
    console.log('==+==')
  }
  render() {
    const { actions, children } = this.props
    return (
      <div>
        <section className="content">
          <OfficialBuy {...this.props}/>
          <MarketBuy {...this.props} />
        </section>
        <BuyOfficialDialog {...this.props} />
      </div>
    )
  }
}

// <OfficialBuy />

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
)(Buy)
