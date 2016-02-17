import ActionTypes from '../constants/ActionTypes'

const initState = {
  accountReady: false,
  accountError: false,
  account: {}
};

export default function account(state = initState, action) {
  switch (action.type) {
    case ActionTypes.ACCOUNT_LOAD: {
      return {
        ...state,
        accountReady: false
      }
    }
    case ActionTypes.ACCOUNT_LOAD_SUCCESS: {
      return {
        ...state,
        account: action.data,
        accountReady: true,
        accountError: false
      }
    }
    case ActionTypes.ACCOUNT_LOAD_ERROR: {
      return {
        ...state,
        account: action.data,
        accountReady: true,
        accountError: true
      }
    }
    default: {
      return state;
    }
  }
}
