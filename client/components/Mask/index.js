import React, { PropTypes, Component } from 'react'
import style from './style.css'

class Mask extends Component {

  render() {
    console.log(this.props)
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
