import { Link } from "react-router-dom";

function Header() {

  const handlelogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://cdn-icons-png.flaticon.com/512/7108/7108027.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/pay"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Make Payment
                  </Link>

                  <Link
                    to="/viewbalance"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    View Balance
                  </Link>

                  <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">Transition History</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/transitionhistory/lasthour' >Last Hour</Link></li>
                    <li><Link to='/transitionhistory/lastday' >Last Day</Link></li>
                    <li><Link to='/transitionhistory/lastmonth' >Last Month</Link></li>
                    <li><Link to='/transitionhistory/lastyear' >Last Year</Link></li>
                  </ul>
                </div>

                  <Link onClick={handlelogout}
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Log Out
                  </Link>

                </div>
              </div>
            </div>
            
          </div>
        </div>

      </nav>
    </div>
  );
}
export default Header;
