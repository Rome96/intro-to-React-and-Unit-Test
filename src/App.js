import React from 'react'
import PropTypes from 'prop-types'

const App = ({greeting}) => {
  // const greeting = 'Hola universo'
  return (
    <>
      <h1>{greeting}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        eligendi nisi reiciendis sunt illum delectus aspernatur et vel suscipit.
      </p>
    </>
  )
}

App.propTypes = {
  greeting: PropTypes.string.isRequired
}

export default App