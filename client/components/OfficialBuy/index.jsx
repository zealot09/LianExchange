import React, { PropTypes, Component } from 'react'
import style from './style.css'

class OfficialBuy extends Component {
  toggleBuyOfficialDialog() {


    // var me = this;
    // if(this.props.storage.handleLoading.isLoading) {
    //   this.props.actions.hideLoading.bind(me);
    // } else {
    //   this.props.actions.showLoading.bind(me);
    // }
  }

  render() {
    const { actions } = this.props
    return (
      <div className={style.officialBuy}>
        <h2 className={style.h2Title}><span>平台售卖区</span></h2>
        <p className={style.marketTitle}><label>平台指导价</label></p>
        <p className={style.officialPrice}><span>0.85</span>元/个
          <a href="javascript:;" className={style.btnOfficialBuy} onClick={this.props.actions.loadCoins}>抢购</a>
        </p>
    </div>
    )
  }
}

export default OfficialBuy
