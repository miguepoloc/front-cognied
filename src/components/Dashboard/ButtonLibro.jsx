import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/ButtonToUp.scss'
import { Button, Modal } from 'react-bootstrap'

const ButtonLibro = ({text,title}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const styleCenter = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  }

  return (
    <div>

      <div
        className="buttonUp topRight text-white"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faBookOpen } size="xl"/>
      </div>
      <Modal show={show}  size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
  centered>
        <Modal.Header style={styleCenter}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styleCenter} dangerouslySetInnerHTML={{__html: text}}>
          

        </Modal.Body>
        <Modal.Footer style={styleCenter}>
          <Button className="btn btn-naranja" size="lg" onClick={handleClose}>
            Cerrar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default ButtonLibro
