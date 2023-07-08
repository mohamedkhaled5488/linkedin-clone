import React from 'react'
import feedicon from '../../images/feedicon.svg'

const Rigthside = () => {
  return (
    <div className='rightside'>
      <div className='header-rightside'>
        <h5>add to your feed</h5>
        <img src={feedicon}/>
      </div>
      <ul>
        <li>
        <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
        <div className='btn-right'>
          <p>#linkedin</p>
          <p className='singin-btn'>follow </p>
        </div>
        </li>
        <li>
        <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
        <div className='btn-right'>
          <p>#linkedin</p>
          <p className='singin-btn'>follow</p>
        </div>
        </li>
      </ul>
      
    </div>
  )
}

export default Rigthside
