import React from 'react'
import "./HomePage.css"
import { LuSearch } from 'react-icons/lu'
import { MdArrowForward } from 'react-icons/md'

function HomePage() {
  return (
    <div>
      <div className='home-page'>
        <h1 className='hero-text'><span className='block-text'>fly you to the</span><span className='gradient-text'>space</span></h1>
        <p className='hero-para'>Explore, Experience, and Elevate Beyond <span className='new-line'>Boundaries!</span></p>
        <div className='search-bar'>
          <input placeholder='Search' className='search-input' />
          <button className='search-button'><LuSearch /><span className='boom-text'>Boom!</span></button>
        </div>
        <button className='explore-button'><span className='button-text'>Explore</span><MdArrowForward /></button>
      </div>
    </div>
  )
}

export default HomePage