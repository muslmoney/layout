import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
    return (
        <div><h1>NotFound</h1>
      <button onClick={() => navigate(-1)} >Back page</button>
      </div>
  )
}

export default NotFound