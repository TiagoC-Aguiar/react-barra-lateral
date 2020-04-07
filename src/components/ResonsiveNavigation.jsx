import React, { useState } from 'react'

import '../assets/scss/toolbar.scss'

function ResponsiveNavigation({ navLinks, background, hoverBackground, linkColor, logo }) {
  const [ hoverIndex, setHoverIndex ] = useState(-1)
  const [ navOpen, setNavOpen ] = useState(false)

  return (
    <nav
      className="responsive-toolbar"
      style={{ background: background || '#333'}}
    >

    </nav>
  )

}

export default ResponsiveNavigation
