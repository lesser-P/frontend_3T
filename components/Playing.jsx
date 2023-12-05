import React, { useContext, useState } from 'react'
import { AppContext } from '../pages'

function Playing() {
  const { currentChar } = useContext(AppContext)

  return (
    <h1 style={{ color: '#a3e635' }}>
      Playing now: <span style={{ color: 'white', fontFamily: 'mono', fontSize: 'inherit' }}>{currentChar}</span>
    </h1>
  )
}

export default Playing
