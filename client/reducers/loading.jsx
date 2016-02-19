const initState = {
  isLoading: false,
  isFirstLoading: true
}

export default function handleLoading(state = initState, action) {
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
        isLoading: hide
      }
    }
    default: {
      return state;
    }
  }
}
