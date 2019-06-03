import React from 'react'
import {withRouter} from 'react-router-dom'
import Banner from './Banner'
import NavBar from './NavBar'

const About = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <div>
        This is a React App for County Fair Hog Fans.
      </div>
    </div>
  )
}

export default withRouter(About)
