import React from 'react'
import {Link} from 'react-router-dom'

const HogTile = props => {
  return (
      <div className="ui four wide column">
          <div className="ui card">
            <div className="image">
              <Link to={`/hogslist/${props.hog.name}`}>
                <img
                  alt=""
                  src={require(`../hog-imgs/${props.hog.name.split(" ").map(word => word.toLowerCase()).join('_')}.jpg`)}
                />
              </Link>
            </div>
            <div className="content">
              <div className="header">
                {props.hog.name}
              </div>
            </div>
          </div>
      </div>
  )
}


export default HogTile
