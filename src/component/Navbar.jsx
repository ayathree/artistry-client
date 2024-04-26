import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/art_1.jpg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, logOut}= useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
  }
    const links =<>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/allArt'}>All Art & craft Items </NavLink>
    {
      user && <NavLink to={'/addCraft'}>Add Craft Item</NavLink>
    }
    {
      user && <NavLink to={'/myCraft'}>My Art&Craft List</NavLink>
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

    <a className='text-2xl font-extrabold text-[#805729]'>ARTISTRY</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="flex flex-row gap-3">{links}</li>
     
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <> <div className="dropdown dropdown-end">
      <div tabIndex={0} role="" className="btn  btn-circle avatar tooltip tooltip-bottom lg:tooltip-left" data-tip={user.displayName}>
        <div className=" rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>
    </>: <div className=' flex flex-row gap-3'>
   <Link to={'/logged'}><button className="btn bg-[#eb9b40] ">Login</button></Link>
    <Link to={'/register'}><button className="btn bg-[#eb9b40]">Register</button></Link>
   </div>
    }
   
    

  </div>
</div>
        </div>
    );
};

export default Navbar;