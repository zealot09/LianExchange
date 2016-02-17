import ActionTypes from '../constants/ActionTypes'
import {requestBase, baseAPI} from '../app/configs'

export function loadAccount() {
  return {
    types: [
      ActionTypes.ACCOUNT_LOAD,
      ActionTypes.ACCOUNT_LOAD_SUCCESS,
      ActionTypes.ACCOUNT_LOAD_ERROR
    ],
    requestSettings: {
      method: 'GET',
      url: requestBase.lianCoinUrl + baseAPI.me
    },
    requestParams: {Includes:['Accounts','Profile','BankCards']}
  }
}
