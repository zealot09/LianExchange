import ActionTypes from '../constants/ActionTypes'
import {requestBase, baseAPI} from '../app/configs'

export function loadCoins() {
  return {
    types: [
      ActionTypes.COINS_LOAD,
      ActionTypes.COINS_LOAD_SUCCESS,
      ActionTypes.COINS_LOAD_ERROR
    ],
    requestSettings: {
      method: 'GET',
      url: requestBase.lianCoinUrl + baseAPI.coins
    },
    requestParams: {Skip: 0, Take: 10}
  }
}

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
