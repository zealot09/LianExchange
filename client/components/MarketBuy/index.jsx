import React, { PropTypes, Component } from 'react'
import style from './style.local.css'

class MarketBuy extends Component {
  componentWillMount() {
    this.props.actions.loadCoins()
  }
  render() {
    var listClassName = [style.itemList, style.buyList].join(' ')
    var noItemClassName = [style.vacant, 'hide'].join(' ')
    var loadMoreClassName = [style.bLoadMore, style.bLoadMoreFixed, 'hide'].join(' ')
    var coins = this.props.state.coinStore.coins;

    return (
      <div className={style.marketBuy}>
        <h2 className={style.h2Title}><span>个人转让区</span></h2>
        <div className={style.sellExplain}>
          <label>温馨提示：</label>
          以下都是个人用户自由转让的联豆，与平台售卖的联豆具有相同购买力，在联连Life电商平台可任意抵扣。
        </div>
        <p className={style.marketTitle}><label>个人报价</label><label>数量</label></p>
        <ul className={listClassName}>
          {
            coins.map(function(item) {
              return <li><div className={style.price}><span>{item.price}</span>元/个</div>
                    <div className={style.amount}><span>{item.quantityLeft}</span>个</div>
                    <div className={style.operate}><a href="javascript:void(0);" className={style.btnBuy}>抢购</a></div></li>
            })
          }
          <div className="clear"></div>
        </ul>
        <div className={noItemClassName}>
            <p>太迟了，联豆被抢光啦~<br/>
                一会再来看看吧~</p>
        </div>
        <a href="javascript:void(0)" className={loadMoreClassName}>加载更多</a>
      </div>
    )
  }
}

export default MarketBuy
