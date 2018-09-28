import React from 'react'

const Login = () => {
  return(
    <div className='container'>
     <p>
       <a className='btn-large deep-orange lighten-2' href='/auth/google'> 
        <i className="material-icons left">assignment_ind</i> 
        Login With Google
       </a>
    </p>
    <p>
      <a className='btn-large light-blue darken-4' href='/auth/facebook'> 
        <i className="material-icons left">assignment_ind</i> 
        Login With Facebook
      </a>
    </p>
    </div>
  )
}

export default Login;