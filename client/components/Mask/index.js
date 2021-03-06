import React, { PropTypes, Component } from 'react'
import style from './style.local.css'

class Mask extends Component {

  render() {
    var hideClass = (this.props.isLoading || this.props.isFirstLoading) ? '' : 'hide'
    var maskClassName = 'mask loading-mask ' + hideClass
    return (
      <div>
        <div className={maskClassName} >
          <span className="loading">加载中...</span>
        </div>
      </div>
    )
  }
}

export default Mask
