import {combineReducers} from 'redux'
import hogs from '../porkers_data'

const hogsReducer = (oldState=hogs, action) => {
  switch (action.type) {
    case "VOTE_FOR_HOG":
      return oldState.map(hog => {
        if (hog.name === action.payload.name) {
          hog.vote = hog.vote + 1
        }
        return hog
      })
    case "UPDATE_HOG":
      return oldState.map(hog => {
        if (hog.name === action.payload.name) {
          hog.specialty = action.payload.specialty
          hog.greased = action.payload.greased
          hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] = action.payload.weight
          hog['highest medal achieved'] = action.payload.medal
        }
        return hog
      })
    default:
      return oldState
  }
}

const searchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "SEARCH_TEXT_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const sortValueReducer = (oldState="unsort", action) => {
  switch (action.type) {
    case "SORT_VALUE_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const filterValueReducer = (oldState="all", action) => {
  switch (action.type) {
    case "FILTER_VALUE_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  hogs: hogsReducer,
  searchText: searchTextReducer,
  sortValue: sortValueReducer,
  filterValue: filterValueReducer
})

export default rootReducer
