import React from 'react'
import user from '../../images/user.svg'
import photo from '../../images/photo.svg'

const Themainside = () => {
  return (
    <div className='midside'>
      <form>
        <label>
<img src={user}/>
        </label>
        <input type='text'/>
      </form>
      <ul>
        <li>
          <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
          <p>video</p>
        </li>
        <li>
          <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
          <p>video</p>
        </li>
        <li>
          <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
          <p>video</p>
        </li>
        <li>
          <img src='https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs'/>
          <p>video</p>
        </li>
      </ul>
      <div className='post'>

        <div className='title-post'>
          <div className='profil-pic'>
          <img src={photo}/>
          </div>
          <div className='profile-info'>
            <p>mohamed</p>
            <p>mohamed.khaled72155@gmail.com</p>
            <p>17-15-2023</p>
          </div>
          </div>
          

          <p>this first post</p>

          <div className='post-img'>
          <img src={user}/>
          </div>
        

          </div>
    </div>
  )
}

export default Themainside
