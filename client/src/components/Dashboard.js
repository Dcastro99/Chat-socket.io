import React from 'react'
import Sidebar from './Sidebar'
import '../style/dashboard.css'

export default function Dashboard({ id }) {
  return (
    <div>
      <div id="d-flex" style={{ height: '100vh' }}> <Sidebar id={id} /></div>

    </div>
  )
}
