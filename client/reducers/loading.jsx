import { handleActions } from 'redux-actions'

const initialState = {
  isLoading: false,
  isFirstLoading: false,
  alert: {
    isShowAlert: false,
    message: '弹出对话框'
  },
  isShowConfirm: false
}

export default handleActions({
  'show loading' (state, action) {
    return {...state, isLoading: true}
  },

  'hide loading' (state, action) {
    return {...state, isLoading: false}
  },

  'show alert' (state, action) {
    return {...state, alert: {
      isShowAlert: true,
      message: action.message
    }}
  },

  'hide alert' (state, action) {
    return {...state, alert: {
      isShowAlert: false
    }}
  },

  'show confirm' (state, action) {
    return {...state, isShowConfirm: true}
  },

  'hide confirm' (state, action) {
    return {...state, isShowConfirm: false}
  }

}, initialState)
