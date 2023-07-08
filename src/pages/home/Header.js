import React from 'react'
import homelogo from '../../images/homelogo.svg'
import navhome from '../../images/navhome.svg'
import navjobs from '../../images/navjobs.svg'
import navmessaging from '../../images/navmessaging.svg'
import navnetwork from '../../images/navnetwork.svg'
import navnotifications from '../../images/navnotifications.svg'
import navwork from '../../images/navnetwork.svg'
import user from '../../images/user.svg'
import downicon from '../../images/downicon.svg'
import navwork2 from '../../images/navwork2.svg'

const Header = () => {
  return (
    <header>
        <div className='left-side'>
        <img src={homelogo} alt='image'/>
            <input type='text' placeholder='search'/>
        </div>
        <div className='right-side'>
          <ul>
            <li>
              <img src={navhome}/>
              <p>home</p>
            </li>
            <li>
              <img src={navjobs}/>
              <p>jobs</p>
            </li>
            <li>
              <img src={navmessaging}/>
              <p>messaging</p>
            </li>
            <li>
              <img src={navnetwork}/>
              <p>navnetwork</p>
            </li>
            <li>
              <img src={navnotifications}/>
              <p>navnotifications</p>
            </li>
            <li>
              <img src={navwork}/>
              <p>work</p>
            </li>
            <li>
              <img src={user}/>
              <p>me  <span><img src={downicon}/></span></p> 
            </li>
          </ul>
          <ul>
            <li>
            <img src={navwork2}/>
            <p>work  <span><img src={downicon}/></span></p>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header
