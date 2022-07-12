import { Link, NavLink } from "react-router-dom";
import Mailing from "../templates/Mailing";
import Sosmeds from "../templates/Sosmeds";

function Header() {

  const darkMode = () => {
    document.querySelector("html").classList.toggle("dark");
    document.querySelector(".mode").classList.toggle("text-yellow-200");
    document.querySelector(".mode").classList.toggle("text-teal-800");

    if (!localStorage.key("mode")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.removeItem("mode");
    }
  }

  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive && '#0F766E'
    }
  }

  return (
    <>
      <div className="text-sm p-1">
        <div className="flex justify-between mx-auto md:w-[90%] md:px-0 w-full px-4 items-center">
          <h3 className="font-bold">PPI Sudan <span className="hidden md:inline font-thin">| Indonesian Students Association in Sudan</span></h3>
          <div className="text-lg">
            <Sosmeds />
          </div>
        </div>
      </div>
      <div className="flex sticky top-0 py-2 text-slate-100 bg-teal-600 z-20">
        <div className="flex justify-between mx-auto md:w-[90%] md:px-0 relative w-full px-4">
          <Link to='/' className="flex items-center text-3xl font-bold"><img src="/assets/img/ppisudan.png" alt="ppi" className="w-10 h-10 mr-2 inline" />PPI <span className="text-teal-800 ml-1 hidden lg:block">Sudan</span></Link>
          <div className="md:flex gap-x-1 items-center hidden">
            <NavLink style={active} to="/" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-house-chimney"></i> Home</NavLink>
            <NavLink style={active} to="/blogs" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-book-open"></i> Blogs</NavLink>
            <NavLink style={active} to="/organizations" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-swatchbook"></i> Organizations</NavLink>
            <NavLink style={active} to="/about" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-briefcase"></i> About</NavLink>
          </div>
          <div className="flex gap-x-1 items-center">
            <i className="fa text-xl fa-comment-dots hover:text-teal-700 cursor-pointer" onClick={() => document.querySelector('.mail').classList.toggle('scale-0')}></i>
            <i className="mode fa md:mx-3 mx-6 lg:mx-6 text-2xl text-teal-800 fa-moon cursor-pointer lg:hover:text-slate-100" onClick={() => darkMode()}></i>
            <NavLink style={active} to="/admin" className="py-2 px-3 hover:bg-teal-700 bg-teal-500 rounded-lg"><i className="fa mr-1 fa-user"></i> Admin</NavLink>
          </div>
          <div className="absolute right-0 top-16 scale-0 transition duration-500 md:w-96 w-[85%] md:mx-0 mx-4 mail text-slate-800 rounded-xl border dark:text-slate-100">
            <Mailing />
          </div>
        </div>
        <div className="md:hidden gap-x-1 items-center flex fixed bottom-0 left-0 right-0 justify-around text-xl py-2 bg-teal-600">
          <NavLink style={active} to="/" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa fa-house-chimney"></i></NavLink>
          <NavLink style={active} to="/blogs" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa fa-book-open"></i></NavLink>
          <NavLink style={active} to="/organizations" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa fa-swatchbook"></i></NavLink>
          <NavLink style={active} to="/about" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa fa-briefcase"></i></NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;