import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import logo from '../images/nuestack1.ico';
function Logo() {
  return (
    <div>
        <Image src={logo} />
    </div>
  )
}

export default Logo