import React, { PropTypes, Component } from 'react'
// import * as Coins from '../../actions/coins'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import style from './style.css'

class OfficialBuy extends Component {
  toggleBuyOfficialDialog() {

  }

  render() {
    return (
      <div className={style.officialBuy}>
        <h2 className={style.h2Title}><span>平台售卖区</span></h2>
        <p className={style.marketTitle}><label>平台指导价</label></p>
        <p className={style.officialPrice}><span>0.85</span>元/个
          <a href="javascript:;" className={style.btnOfficialBuy} onClick={this.toggleBuyOfficialDialog}>抢购</a>
        </p>
    </div>
    )
  }
}

export default OfficialBuy

// function mapStateToProps(state) {
//   return {
//     storage: state.coins
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Coins, dispatch)
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(OfficialBuy)

// <a href="#help" title="帮助" class="help"></a>
// export default OfficialBuy
