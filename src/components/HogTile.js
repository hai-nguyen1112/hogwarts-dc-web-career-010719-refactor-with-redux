import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class HogTile extends React.Component {
  constructor() {
    super()
    this.state = {
      hide: false
    }
  }

  handleClickOfHide = () => {
    this.setState({hide: !this.state.hide})
  }

  render() {
    console.log(this.props.hogGifs[this.props.hog.name])
    return (
      <div className="ui four wide column">
          {
            this.state.hide
            ?
            null
            :
            <div className="ui card">
              <div className="image">
                <Link to={`/hogslist/${this.props.hog.name}`}>
                  <img
                    alt=""
                    src={this.props.hogGifs[this.props.hog.name]}
                    style={{width: "250px"}}
                  />
                </Link>
              </div>
              <div className="content">
                <div className="header" onClick={this.handleClickOfHide}>
                  {this.props.hog.name}
                </div>
              </div>
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hogGifs: state.hogGifs
  }
}

export default connect(mapStateToProps)(HogTile)
