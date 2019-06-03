import React, {Component} from 'react'
import '../App.css'
import HogsContainer from './HogsContainer'
import HogDetail from './HogDetail'
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import About from './About'
import HogForm from './HogForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/hoglists/:id/edit" component={HogForm}/>
          <Route exact path="/hogslist/:id" component={HogDetail}/>
          <Route exact path="/hogslist" component={HogsContainer}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" render={() => <Redirect to="/hogslist"/>}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({hogs: state.hogs})

export default withRouter(connect(mapStateToProps)(App))
