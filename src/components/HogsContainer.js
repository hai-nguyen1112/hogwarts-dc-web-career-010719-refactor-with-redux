import React from 'react'
import {connect} from 'react-redux'
import HogTile from './HogTile'
import Banner from './Banner'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import SortBar from './SortBar'
import FilterBar from './FilterBar'

const HogsContainer = props => {
  let hogTiles = props.hogs.map(hog => <HogTile key={hog.name} hog={hog}/>)
  return (
    <div className="hogslist">
      <Banner />
      <NavBar />
      <SearchBar />
      <SortBar />
      <FilterBar />
      <div className="ui grid container" id="hogslist">
        {hogTiles}
      </div>
    </div>
  )
}

const filterHogs = (hogs, searchText) => {
   return hogs.filter(hog => hog.name.toLowerCase().includes(searchText.toLowerCase()))
}

const sortHogs = (hogs, sortValue) => {
  if (sortValue === "unsort") {
    return hogs
  } else if (sortValue === 'name') {
    return hogs.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    return hogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
  }
}

const filterHogsByGreased = (hogs, filterValue) => {
  if (filterValue === "all") {
    return hogs
  } else if (filterValue === 'greased') {
    return hogs.filter(hog => hog.greased === true)
  } else {
    return hogs.filter(hog => hog.greased === false)
  }
}

const mapStateToProps = state => ({hogs: filterHogsByGreased(sortHogs(filterHogs(state.hogs, state.searchText), state.sortValue), state.filterValue)})

export default connect(mapStateToProps)(HogsContainer)
