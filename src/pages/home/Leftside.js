import React from 'react'
import card from '../../images/card.svg'
import photo from '../../images/photo.svg'
import user from '../../images/user.svg'
import itemicon from '../../images/itemicon.svg'
import widgeticon from '../../images/widgeticon.svg'
import pluseicon from '../../images/plusicon.svg'

const Leftside = () => {
  return (
    <div className='mainside'>
        <div className='topside'> 
            <img src={card}/>
            <div className='personal-img'>
                <img src={user}/>
             
            </div>
            <h5>Welcome, there!</h5>
            <p style={{color:'blue'}}>Add a photo</p>
           
        </div>

        <div className='sidesection'>
           <p>
           <h6>Connections</h6>
              <h6> Grow your network</h6>
           </p>
              <img src={widgeticon}/>
            
            </div>
            <hr/>
            <div className=' diffr'>
               
               
                <img src={itemicon}/>
                <p> My Items</p>
            </div>
            <div className='downside'>
              <ul>
                <li>group</li>
                <li>Event</li>
                <li>follows hashtag</li>
              </ul>
              <div className='plusicon'>
                <img src={pluseicon}/>
              </div>
              {/* <div className='line'></div> */}
              <hr></hr>
              <h5 className='discover'>discover more</h5>
            </div>
      
    </div>
  )
}

export default Leftside
