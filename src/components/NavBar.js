import React from 'react'
import {Menu} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'

const NavBar = props => {
  return (
    <Menu>
      <Menu.Item
        as={NavLink}
        to="/hogslist"
        name="Home"
        active={props.location.pathname === "/hogslist"}
      />
      <Menu.Item
        as={NavLink}
        to="/about"
        name="About"
        active={props.location.pathname === "/about"}
      />
    </Menu>
  )
}

export default withRouter(NavBar)
