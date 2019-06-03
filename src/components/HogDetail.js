import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import {voteForHog} from '../redux/actions'

const HogDetail = props => {
  return (
    <div>
      <Banner />
      <NavBar />
      <div id="hogdetail">
        <div className="ui card">
          <div className="image">
              <img
                alt=""
                src={require(`../hog-imgs/${props.hog.name.split(" ").map(word => word.toLowerCase()).join('_')}.jpg`)}
              />
          </div>
          <div className="content">
            <div className="header">
              {props.hog.name}
            </div>
            <div className="description">
              Specialty: {props.hog.specialty}<br/>
              Greased: {props.hog.greased ? 'Yes' : 'No'}<br/>
              Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/>
              Medal: {props.hog['highest medal achieved']} <br/>
              Vote: {props.hog.vote}
            </div>
          </div>
        </div>
        <div>
          <Button onClick={() => props.vote(props.hog)}>Vote</Button>&nbsp;&nbsp;
          <Link to={`/hoglists/${props.hog.name}/edit`}><Button>Edit</Button></Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    hog: state.hogs.find(hog => hog.name === ownProps.match.params.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    vote: hog => dispatch(voteForHog(hog))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HogDetail))
