import React from 'react'
import fetchSlaves from '../connectors/api-connector'
import SlaveList from '../components/SlaveList'

class SlaveView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slaves: []
    }

    fetchSlaves().then(slaves => {
      this.setState({ slaves })
    })
  }

  render () {
    return <SlaveList slaves={this.state.slaves} />
  }
}

export default SlaveView
