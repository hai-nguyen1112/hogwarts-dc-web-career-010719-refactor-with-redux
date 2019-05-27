import {combineReducers} from 'redux'

const hogsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "GET_HOGS":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  hogs: hogsReducer
})

export default rootReducer
