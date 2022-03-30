import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
function NavBarElement ({ Seccion, Scroll }) {
  return (
      <Nav.Link
          // className="text-black font-weight-bold"
          id={`Nav-${Seccion.id}`}
          onClick={() => Scroll(Seccion.id)}
      >
          {Seccion.txt}
      </Nav.Link>
  )
}
NavBarElement.propTypes = {
  Seccion: PropTypes.object,
  Scroll: PropTypes.func
}

export default NavBarElement
