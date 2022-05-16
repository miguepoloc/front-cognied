import React from 'react'
import PropTypes from 'prop-types'
//  import "../helpers/Bubbles"
import Logo from '../../assets/img/logo.svg'
import '../../assets/css/Home.scss'

const Home = ({ style, section }) => {
  return (
    <>
      <section id={section.id}>
        <div className="hero justify-content-center  d-flex align-items-center ">
          <div id="particles-js" className="burbujas_home">
            {/* <canvas className="particles-js-canvas-el"></canvas> */}
          </div>
          <div className="w-75 w-md-50 w-lg-25">
            {
              // Esto es temporal mientras se decide cual es la mejor idea para el inicio.
              <img src={Logo} alt="" />
            }
            {/* <div className="hero" id="particles-js"> */}
            <div className="w wave"></div>
            <div className="w wave2"></div>
            <div className="w wave3"></div>

            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

Home.propTypes = {
  style: PropTypes.string
}

export default Home
