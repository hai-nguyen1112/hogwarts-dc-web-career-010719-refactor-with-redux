import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'
import {changeFilterValue} from '../redux/actions'

const filterOptions = [
  {
    text: "All",
    value: "all",
    key: "all"
  },
  {
    text: "Greased",
    value: "greased",
    key: "greased"
  },
  {
    text: "Non-greased",
    value: "non-greased",
    key: "non-greased"
  }
]

class FilterBar extends Component {
  componentDidMount() {
    this.props.onFilter("all")
  }

  render() {
    return (
      <div id="filterbarcontainer">
        <div id="filterbartitle" style={{fontSize: "20px", color: "pink", fontWeight: "bold"}}>
          Filter:&nbsp;&nbsp;&nbsp;
        </div>
        <div id="filterbar">
          <Dropdown
            placeholder="All"
            selection
            fluid
            options={filterOptions}
            onChange={e => this.props.onFilter(e.target.innerText.toLowerCase())}
            style={{width: "50%"}}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.filterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilter: value => dispatch(changeFilterValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
