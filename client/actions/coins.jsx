import ActionTypes from '../constants/ActionTypes'
import {requestBase, baseAPI} from '../app/configs'

import { createAction } from 'redux-actions'

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

export function filterAccount() {
  return {
    type: ActionTypes.ACCOUNT_FILTER
  }
}

export const showLoading = createAction('show loading')
export const hideLoading = createAction('hide loading')
export const showAlert = createAction('show alert')
export const hideAlert = createAction('hide alert')
export const showConfirm = createAction('show confirm')
export const hideConfirm = createAction('hide confirm')
