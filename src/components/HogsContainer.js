import React from 'react'
import {getHogs} from '../redux/actions'
import {connect} from 'react-redux'
import HogTile from './HogTile'

class HogsContainer extends React.Component {

  componentDidMount() {
    this.props.getHogs()
  }

  render() {
    let hogTiles = this.props.hogs.map(hog => <HogTile key={hog.name} hog={hog}/>)
    return (
      <div className="ui grid container">
        {hogTiles}
      </div>
    )
  }
}

const mapStateToProps = state => ({hogs: state.hogs})

const mapDispatchToProps = dispatch => {
  return {
    getHogs: () => dispatch(getHogs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HogsContainer)
