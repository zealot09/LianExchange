import { handleActions } from 'redux-actions'

const initialState = {
  isLoading: false,
  isFirstLoading: false
}

// export default handleActions({
//   'show loading' (state, action) {
//     console.log(action)
//     return {...state, isLoading: true}
//   },
//
//   'hide loading' (state, action) {
//     return {...state, isLoading: false}
//   }
// }, initialState)

export default function handleLoading(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'show loading': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'hide loading': {
      return {
        ...state,
        isLoading: false
      }
    }
    default: {
      return state;
    }
  }
}
