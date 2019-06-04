import hogs from '../porkers_data'

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

function fetchHogsWithThunk() {
  return dispatch => {
    fetch('http://api.giphy.com/v1/gifs/search?q=pig&api_key=egbUmpdYnCQdAIkmcWr0tX2Q56n2mQRd&limit=13')
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedHogsWithThunk(data))
    })
  }
}

function fetchedHogsWithThunk(data) {
  let hogGifs = {}
  for (let i = 0; i < hogs.length; i++) {
    hogGifs[hogs[i].name] = data.data[i].images.downsized_medium.url
  }
  return {
    type: "FETCHED_HOG_GIFS",
    payload: hogGifs
  }
}

export {changeSearchText, voteForHog, updateHogInfo, changeSortValue, changeFilterValue, fetchHogsWithThunk}
