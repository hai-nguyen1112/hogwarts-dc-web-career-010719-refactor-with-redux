import React from 'react'
import {changeSearchText} from '../redux/actions'
import {connect} from 'react-redux'
import {Input} from 'semantic-ui-react'

class SearchBar extends React.Component {

  componentDidMount() {
    this.props.handleTextChange("")
  }

  render() {
    return (
      <div id="searchbarcontainer">
        <div id="searchbartitle" style={{fontSize: "20px", color: "pink", fontWeight: "bold"}}>
          Search:&nbsp;&nbsp;&nbsp;
        </div>
        <div id="searchbar">
          <Input
            type="text"
            name="search"
            value={this.props.searchText}
            placeholder="By Name..."
            onChange={e => this.props.handleTextChange(e.target.value)}
            style={{width: "50%"}}
          />
        </div>
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
