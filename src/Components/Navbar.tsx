import { Link } from "react-router-dom";

const handlelogout = () => {
    localStorage.clear();
  };

const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/pay" >Make Payment</Link></li>
        <li><Link to="/viewbalance">View Balance</Link></li>
        <li>
          <a>Transaction History</a>
          <ul className="p-2">
            <li><Link to='/transitionhistory/lasthour' >Last Hour</Link></li>
            <li><Link to='/transitionhistory/lastday' >Last Day</Link></li>
            <li><Link to='/transitionhistory/lastmonth' >Last Month</Link></li>
            <li><Link to='/transitionhistory/lastyear' >Last Year</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">My Wallet</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link to="/pay" >Make Payment</Link></li>
        <li><Link to="/viewbalance">View Balance</Link></li>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-sm mr-2 ">Transaction History</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/transitionhistory/lasthour' >Last Hour</Link></li>
            <li><Link to='/transitionhistory/lastday' >Last Day</Link></li>
            <li><Link to='/transitionhistory/lastmonth' >Last Month</Link></li>
            <li><Link to='/transitionhistory/lastyear' >Last Year</Link></li>
        </ul>
      </div>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" onClick={handlelogout} className="btn btn-sm">Log Out</Link>
  </div>
</div>
  )
}

export default Navbar
