import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import base from '../../public/css/base.css'
import style from './header.local.css'

class Header extends Component {
  goBack() {
    console.log('back --')
  }

  refresh() {
    console.log('back refresh')
  }

  render() {

    return (
      <header className={style.header}>
        <span>联豆平台</span>
        <a href="javascript:void(0);" title="" className={style.back} onClick={this.goBack}></a>
        <a href="javascript:void(0)" title="刷新" className={style.refresh} onClick={this.refresh}></a>
          <a href="javascript:;" title="帮助" className={style.help}></a>
      </header>
    )
  }
}

// <a href="#help" title="帮助" class="help"></a>
export default Header
