import React from 'react'
import './HomePage.css'
import Header from './Header'
import Leftside from './Leftside'
import Themainside from './Themainside'
import Rigthside from './Rigthside'



export const HomePage = () => {
  return (
    <main>
    <Header/>
    <section>
    <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
    </section>
    <article className='mainartical'>
     <Leftside/>
     <Themainside/>
     <Rigthside/>

    </article>
</main>
  )
}



