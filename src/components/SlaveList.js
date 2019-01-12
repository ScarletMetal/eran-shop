import React from 'react'
import Slave from './Slave'
import propTypes from 'prop-types'

function SlaveList (props) {
  return (
    <div>
      {props.slaves.map((slave, index) => <Slave {...slave} key={index} />)}
    </div>
  )
}

SlaveList.propTypes = {
  slaves: propTypes.array
}

export default SlaveList
