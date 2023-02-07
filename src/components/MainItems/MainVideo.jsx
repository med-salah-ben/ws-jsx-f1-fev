import React from 'react'
import MainDropdow from "./MainDropdown";

const MainVideo = () => {
  return (
    <div className='mainVideo'>
        <iframe id="batVideo" width="740" height="444" src="https://www.youtube.com/embed/bu6EBd3rPmI" title="Spacetoon | سبيستون - بات مان - شارة العمل" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <MainDropdow />
    </div>
  )
}

export default MainVideo