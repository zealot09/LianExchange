import React, { PropTypes, Component } from 'react'
import Modal from 'react-modal'
import { Checkbox } from '../Checkbox'
import style from './style.local.css'

const customStyle = {
  content : {
   top : '50%',
   left : '50%',
   right : 'auto',
   bottom : 'auto',
   marginRight : '-50%',
   transform : 'translate(-50%, -50%)',
   overflow : 'visible'
 },
 overlay : {
    position          : 'fixed',
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex : 10
  }
}

class BuyOfficialDialog extends Component {

  closeBuyOfficial() {
    this.props.actions.hideOfficialBuyDialog()
  }

  changeAgreementRules(event) {
    console.log(event)
  }

  render() {
    var state = this.props.state;

    var qtyClassName = [style.fieldQuantity, style.buyDialogAmountInput, 'tc'].join(' ')
    var dialogClassName = [style.buyOfficialDialog, 'dialog-box'].join(' ')

    return (
      <div>
        <Modal isOpen={state.loadingStore.buyOfficial.isShow}
               onRequestClose={this.closeBuyOfficial}
               style={customStyle}
               className={dialogClassName}>
            <p className={style.buyFormPrice}>单价：<span>0.85</span>元/个</p>
            <p className={style.buyFormQuantity}>数量：
              <input type="tel" className={qtyClassName} min="1" max="120000"/>
            </p>
            <div>
              <Checkbox
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"/>
              同意<a href="#articles/TermsAndConditions" className={style.sellRules}>《联豆管理办法》</a>
          </div>
            <div className="buy-form-payment-method">

            </div>
            <a className={style.btnBuySubmit}>抢购</a>
            <a href="javascript:void(0);" className="dialog-btn-close" onClick={this.closeBuyOfficial.bind(this)}></a>
        </Modal>
      </div>
    )
  }
}

// <Modal isOpen="">
// </Modal>
// <input type="checkbox" name="sellRules" onChange={this.changeAgreementRules.bind(this)}/>

export default BuyOfficialDialog
