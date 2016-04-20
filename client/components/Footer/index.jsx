import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import style from './footer.local.css'

class Header extends Component {
  goBuy() {
    this.props.history.push({
      pathname: 'buy'
    })
  }

  render() {
    var tabBuyClass = [style.tabIcon, style.tabBuySelected, style.selected].join(' ')
    var tabSellClass = [style.tabIcon, style.tabSell].join(' ')
    var tabHandsel = [style.tabIcon, style.tabHandsel].join(' ')
    var tabLuckymoney = [style.tabIcon, style.tabLuckymoney].join(' ')
    var tabAccount = [style.tabIcon, style.tabOrder].join(' ')
    //
    // <div className={style.line } onClick={this.goBuy.bind(this)}>
    //   <div className={tabBuyClass}></div>
    //   <a href="javascript:void(0)">买联豆</a>
    // </div>
    return (
        <ul className={style.llytabs}>
          <li className={style.selected}>
            <Link to="/buy">买联豆</Link>
          </li>
          <li className={style.selected}>
            <div className={style.line }>
              <div className={tabSellClass}></div>
              <a href="/sell">买联豆</a>
           </div>
          </li>
          <li className={style.selected}>
            <div className={style.line }>
              <div className={tabHandsel}></div>
              <a href="javascript:void(0)">买联豆</a>
           </div>
          </li>
          <li className={style.selected}>
            <div className={style.line }>
              <div className={tabLuckymoney}></div>
              <a href="javascript:void(0)">买联豆</a>
           </div>
          </li>
          <li className={style.selected}>
            <div className={style.line }>
              <div className={tabAccount}></div>
              <a href="javascript:void(0)">买联豆</a>
           </div>
          </li>
        </ul>
    )
  }
}

export default Header
