import React from 'react'
import '../../assets/css/ButtonToUp.scss'
const ButtonToUp = ({ Scroll, seccionToUpId }) => {
  return (
        <div
            onClick={() => Scroll.scroll('Home')}
            className="buttonUp bottomRight"
            dangerouslySetInnerHTML={{
              __html: `
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 226 226"
                      style="fill: #000000;"
                  >
                      <defs>
                          <linearGradient
                              x1="204.59592"
                              y1="162.22092"
                              x2="124.16817"
                              y2="81.79317"
                              gradientUnits="userSpaceOnUse"
                              id="color-1_NCPZ7hqe16dx_gr1"
                          >
                              <stop offset="0.365" stop-color="#ffffff"></stop>
                              <stop offset="0.699" stop-color="#ffffff"></stop>
                              <stop offset="0.819" stop-color="#ffffff"></stop>
                              <stop offset="0.905" stop-color="#ffffff"></stop>
                              <stop offset="0.974" stop-color="#ffffff"></stop>
                              <stop offset="1" stop-color="#ffffff"></stop>
                          </linearGradient>
                          <linearGradient
                              x1="128.44804"
                              y1="55.17696"
                              x2="24.88354"
                              y2="158.74146"
                              gradientUnits="userSpaceOnUse"
                              id="color-2_NCPZ7hqe16dx_gr2"
                          >
                              <stop offset="0" stop-color="#ffffff"></stop>
                              <stop offset="1" stop-color="#ffffff"></stop>
                          </linearGradient>
                      </defs>
                      <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style="mix-blend-mode: normal"
                      >
                          <path d="M0,226v-226h226v226z" fill="none"></path>
                          <g>
                              <path
                                  d="M119.59638,45.10583l89.54779,89.54779c3.64425,3.64425 3.64425,9.5485 0,13.19275l-18.92279,18.92279c-3.64425,3.64425 -9.5485,3.64425 -13.19275,0l-89.54779,-89.54779c-3.64425,-3.64425 -3.64425,-9.5485 0,-13.19275l18.92279,-18.92279c3.64425,-3.63954 9.5485,-3.63954 13.19275,0z"
                                  fill="url(#color-1_NCPZ7hqe16dx_gr1)"
                              ></path>
                              <path
                                  d="M138.51917,77.22137l-89.54779,89.54779c-3.64425,3.64425 -9.5485,3.64425 -13.19275,0l-18.92279,-18.92279c-3.64425,-3.64425 -3.64425,-9.5485 0,-13.19275l89.54779,-89.54779c3.64425,-3.64425 9.5485,-3.64425 13.19275,0l18.92279,18.92279c3.63954,3.64425 3.63954,9.5485 0,13.19275z"
                                  fill="url(#color-2_NCPZ7hqe16dx_gr2)"
                              ></path>
                          </g>
                      </g>
                  </svg>
             `
            }}
        ></div>
  )
}

export default ButtonToUp
