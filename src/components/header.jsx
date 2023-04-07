

import Logo from '../assets/logo_3.png'




const Header = () => {
  return (
    <div className='Header' >
          <div className='logo'>
               <img src={Logo} alt="Company_logo" />
          </div>

          <div className='Search_container'>
               <form action="">
                    <input type="text" placeholder='Type the search keyword' />
                    <button type="submit">Search</button>
               </form>
          </div>

          <div className='login_sign_up'>
               <button>Login</button>
               <button>Sgn Up</button>
          </div>
    </div>
  )
}

export default Header