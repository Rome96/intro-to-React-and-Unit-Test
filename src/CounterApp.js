import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
  const [increment, setIncrement] = useState(value)

  const handleAdd = () => {
    setIncrement(increment + 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{increment}</h2>
      <button onClick={handleAdd}>+ 1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp
