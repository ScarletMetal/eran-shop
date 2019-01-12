import React from 'react'
import propTypes from 'prop-types'

const Slave = props => {
  return (
    <div>
      <img src={props.image} />
      {props.name}<br />
      {props.price}
    </div>
  )
}

Slave.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  price: propTypes.number
}

export default Slave
