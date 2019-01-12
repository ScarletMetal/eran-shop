import React from 'react'
import propTypes from 'prop-types'
import { Image, Label } from 'semantic-ui-react'

const Slave = props => {
  return (
    <div>
      <Image src={props.image} width="320px" />
      <Label>name: {props.name}</Label>
      <Label>price: {props.price}$</Label>
    </div>
  )
}

Slave.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  price: propTypes.number
}

export default Slave
