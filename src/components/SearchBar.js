import React from 'react'
import {changeSearchText} from '../redux/actions'
import {connect} from 'react-redux'

class SearchBar extends React.Component {

  componentDidMount() {
    this.props.handleTextChange("")
  }

  render() {
    return (
      <div className="ui very large fluid input">
        <input
          type="text"
          name="search"
          value={this.props.searchText}
          placeholder="Search By Name..."
          onChange={e => this.props.handleTextChange(e.target.value)}
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTextChange: text => dispatch(changeSearchText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
