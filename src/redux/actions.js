import hogs from '../porkers_data'

function getHogs() {
  return {
    type: "GET_HOGS",
    payload: hogs
  }
}

export {getHogs}
