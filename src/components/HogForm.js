import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Banner from './Banner'
import NavBar from './NavBar'
import {Button} from 'semantic-ui-react'
import {updateHogInfo} from '../redux/actions'

class HogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.hog.name,
      greased: props.hog.greased,
      specialty: props.hog.specialty,
      weight: props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
      medal: props.hog['highest medal achieved']
    }
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  handleToggleGreased = () => {
    this.setState({greased: !this.state.greased})
  }

  onSave = e => {
    e.preventDefault()
    let updatedInfo = {
      name: this.props.hog.name,
      greased: this.state.greased,
      specialty: this.state.specialty,
      weight: this.state.weight,
      medal: this.state.medal
    }
    this.props.updateHog(updatedInfo)
  }

  render() {
    return (
      <div>
        <Banner />
        <NavBar />
        <div id="hogform">
          <div className="ui card">
            <div className="image">
              <img
                alt=""
                src={require(`../hog-imgs/${this.state.name.split(' ').map(word => word.toLowerCase()).join("_")}.jpg`)}
              />
            </div>
            <div className="content">
              <div className="header">{this.state.name}</div>
              <div className="description">
                <form onSubmit={e => this.onSave(e)}>
                  <label>Specialty:&nbsp;&nbsp;</label>
                  <input
                    type="text"
                    value={this.state.specialty}
                    id="specialty"
                    name="specialty"
                    onChange={e => this.handleChange(e)}
                  />
                  <br/>
                  <label>Greased:&nbsp;&nbsp;</label>
                  <input
                    type="checkbox"
                    name="greased"
                    checked={this.state.greased}
                    id="greased"
                    onChange={this.handleToggleGreased}
                  />
                  <br/>
                  <label>Weight:&nbsp;&nbsp;</label>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={this.state.weight}
                    onChange={e => this.handleChange(e)}
                  />
                  <br/>
                  <label>Medal:&nbsp;&nbsp;</label>
                  <input
                    type="text"
                    name="medal"
                    id="medal"
                    value={this.state.medal}
                    onChange={e => this.handleChange(e)}
                  />
                  <br/>
                  <br/>
                  <Link to={`/hogslist/${this.state.name}`}>
                    <Button>Cancel</Button>&nbsp;&nbsp;
                  </Link>
                    <Button type="submit">Save</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hog: state.hogs.find(hog => hog.name === ownProps.match.params.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHog: info => dispatch(updateHogInfo(info))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HogForm))
