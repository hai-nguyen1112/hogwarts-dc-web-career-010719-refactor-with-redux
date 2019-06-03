function changeSearchText(text) {
  return {
    type: "SEARCH_TEXT_WAS_CHANGED",
    payload: text
  }
}

function voteForHog(hog) {
  return {
    type: "VOTE_FOR_HOG",
    payload: hog
  }
}

function updateHogInfo(info) {
  return {
    type: "UPDATE_HOG",
    payload: info
  }
}

function changeSortValue(value) {
  return {
    type: "SORT_VALUE_WAS_CHANGED",
    payload: value
  }
}

function changeFilterValue(value) {
  return {
    type: "FILTER_VALUE_WAS_CHANGED",
    payload: value
  }
}

export {changeSearchText, voteForHog, updateHogInfo, changeSortValue, changeFilterValue}
