import ActionTypes from '../constants/ActionTypes'

const initState = {
  coinsReady: false,
  coinsError: false,
  coins: []
};

export default function coins(state = initState, action) {
  switch (action.type) {
    case ActionTypes.COINS_LOAD: {
      return {
        ...state,
        coinsReady: false
      }
    }
    case ActionTypes.COINS_LOAD_SUCCESS: {
      console.log(action)
      return {
        ...state,
        coins: action.data.items,
        coinsReady: true,
        coinsError: false
      }
    }
    case ActionTypes.COINS_LOAD_ERROR: {
      return {
        ...state,
        coins: action.data,
        coinsReady: true,
        coinsError: true
      }
    }
    default: {
      return state;
    }
  }
}
