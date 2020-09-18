import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
  const [increment, setIncrement] = useState(value)

  const handleAdd = () => {
    setIncrement(increment + 1)
  }

  const handleSubtract = () => {
    setIncrement(increment - 1);
  };
  
  const handleReset = () => {
    setIncrement(value);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{increment}</h2>
      <button onClick={handleAdd}>+ 1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>- 1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value = 10
};

export default CounterApp
