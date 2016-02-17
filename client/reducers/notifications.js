import ActionTypes from '../constants/ActionTypes'

const initState = {
  notificationsReady: false,
  notificationsError: false,
  notifications: []
};

export default function notifications(state = initState, action) {
  switch (action.type) {
    case ActionTypes.NOTIFICATION_LOAD: {
      return {
        ...state,
        notificationsReady: false
      }
    }
    case ActionTypes.NOTIFICATION_SUCCESS: {
      return {
        ...state,
        notifications: action.data,
        notificationsReady: true,
        notificationsError: false
      }
    }
    default: {
      return state;
    }
  }
}
