import React from 'react'
import './MyForm.scss'
// import { Link } from 'react-router-dom'

import { BiSolidUser } from 'react-icons/bi';
import { BiSolidLockAlt } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const MyForm = () => {

  return (
    <div className='wrap'>
        <div className='add'>
            <h4>Login Form</h4>
            <form action=''>

                <label> <BiSolidUser/> </label>
                <input type="email" name="emails" id="" placeholder='Email or Phone'/> <br />

                <label> <BiSolidLockAlt/> </label>
                <input type="password" name="pwd" id="" placeholder='Password'/> <br />
                <p className='forgt'> Forget Password? </p>

                <input type="submit" value="LOGIN" />

                <div className='form_text'>
                    <p> Or Login With </p>
                    <div className='social'>
                        <span> <i> <FaFacebookF/> </i> Facebook </span>
                        <span> <i> <FaInstagram/> </i> Instagram </span>
                    </div>
                    <div className='dont'>
                        <p> Don't have account? <span> SignUp Now </span> </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyForm