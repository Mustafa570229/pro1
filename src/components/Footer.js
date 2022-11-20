import React from 'react'
import Button from "react-bootstrap/Button"
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h1>footer</h1>
      <Link to="/content"><Button>go content</Button></Link>
      
    </div>
  )
}

export default Footer
