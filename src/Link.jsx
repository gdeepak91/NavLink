import React from 'react'
import { Link } from 'react-router-dom'

const Deep = () => {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Help">Help</Link>
      <Link to="/news">News</Link>
      <Link to="/NoPage">NoPage</Link>
    </>
  )
}

export default Deep