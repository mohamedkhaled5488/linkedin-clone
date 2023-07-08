import React from 'react'
import './Login.css'
import login from '../../images/login.svg'
import hero from '../../images/hero.svg'
import { connect } from "react-redux";
import signInAPI from '../../action/index'


export const Login = (props) => {
 
  return (
    <div className='main'>
      <nav>
      <img src={login} alt='image'/>
   <div className='sidenav'>
    <p>join now</p>
    <p className='singin-btn'>sign in </p>
   </div>
      </nav>
  

   <article className='main-login'>
    <h2>
    Welcome to your professional community
    </h2>
    <form>
    <label>email or phone</label>
      <input type='text'/>
      <label>passworld</label>
      <input type='text'/>
    </form>
    <button  onClick={() =>props.signIn()}>sign in</button>
   </article>


   <div className='footer'>
   <img src={hero} alt='hero'/>

   </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);