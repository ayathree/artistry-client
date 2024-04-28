import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/art_1.jpg'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, logOut}= useContext(AuthContext)
  const [theme, setTheme]= useState('light')

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleTheme = e=>{
    if (e.target.checked) {
      setTheme('dark')
      
    }
    else{
      setTheme('light')
    }
  }
  console.log(theme)

  const handleLogOut=()=>{
    logOut()
  }
    const links =<>
    <NavLink to={'/'} className={'text-[#eb9b40] font-extrabold'}>Home</NavLink>
    <NavLink to={'/allArt'}  className={'text-[#eb9b40] font-extrabold'}>All Art & craft Items </NavLink>
    {
      user && <NavLink to={'/addCraft'}  className={'text-[#eb9b40] font-extrabold'}>Add Craft Item</NavLink>
    }
    {
      user && <NavLink to={'/myCraft'}  className={'text-[#eb9b40] font-extrabold'}>My Art&Craft List</NavLink>
    }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>{links}</li>
      </ul>
    </div>
    <img src={logo} className='h-[50px] w-[50px]' alt="" />

    <a className='text-2xl font-extrabold text-[#eb9b40]'>ARTISTRY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="flex flex-row gap-3">{links}</li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <div className='mr-4'>
    <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input  onChange={handleTheme} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    </div>
    {
      user ? <> <div className="dropdown dropdown-end">
      <div tabIndex={0} role="" className="btn  btn-circle avatar tooltip tooltip-top lg:tooltip-top" data-tip={user.displayName}>
        <div className=" rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>
    </>: <div className=' flex flex-row gap-3'>
   <Link to={'/logged'}><button className="btn bg-[#eb9b40] text-black">Login</button></Link>
    <Link to={'/register'}><button className="btn bg-[#eb9b40] text-black">Register</button></Link>
   </div>
    }
   
    

  </div>
</div>
        </div>
    );
};

export default Navbar;