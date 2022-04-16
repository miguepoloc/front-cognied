import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemCapsula = ({ clase, link, titulo, imgsvg }) => {
  return (
        <>
            <li className="nav-item">
                <Link to={link}>
                    <Button variant="link" className={clase}>
                        <div
                            className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            {imgsvg}
                        </div>
                        <span className="nav-link-text ms-1">{titulo}</span>
                    </Button>
                </Link>
            </li>
        </>
  )
}

export default ItemCapsula
