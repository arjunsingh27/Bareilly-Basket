import React from 'react'
import { Link } from 'react-router-dom'
import AnchorIcon from "@mui/icons-material/Anchor";

const Logo = () => {
  return (
    <Link to="/">
    <div className="logo_container">
      <AnchorIcon fontSize="large" color="disabled" />
    </div>
  </Link>
  )
}

export default Logo