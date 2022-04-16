import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'

const ItemCapsula = ({ clase, link, titulo }) => {
  const history = useHistory()
  function handle () {
    history.push(link)
  }
  return (
        <>
            <li className="nav-item">
                <Button variant="link" className={clase} onClick={handle}>
                    <div
                        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className='color-background' d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
                    </div>
                    <span className="nav-link-text ms-1">{titulo}</span>
                </Button>
            </li>
        </>
  )
}

export default ItemCapsula
