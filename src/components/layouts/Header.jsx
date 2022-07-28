import { Link, NavLink } from "react-router-dom";
import Mailing from "../templates/Mailing";
import Sosmeds from "../templates/Sosmeds";

function Header() {

  const darkMode = () => {
    document.querySelector("html").classList.toggle("dark");
    document.querySelector(".mode").classList.toggle("text-yellow-200");
    document.querySelector(".mode").classList.toggle("text-teal-800");

    if (!localStorage.getItem("mode")) {
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
      <div className="text-sm bg-[#222222]">
        <div className="flex p-1 justify-between text-slate-100 mx-auto md:w-[90%] md:px-0 w-full px-4 items-center">
          <h3 className="font-bold">PPI Sudan <span className="hidden md:inline font-thin">| Indonesian Students Association in Sudan</span></h3>
          <div className="text-lg">
            <Sosmeds />
          </div>
        </div>
      </div>
      <div className="flex sticky top-0 py-2 text-slate-100 bg-teal-600 z-40 dark:bg-teal-800">
        <div className="flex justify-between mx-auto md:w-[90%] md:px-0 relative w-full px-4">
          <Link to='/' className="flex items-center text-3xl font-bold"><img src="/assets/img/ppisudan.png" alt="ppi" className="w-10 h-10 mr-2 inline" /><img src="/assets/img/ppitextlogo.png" alt="textlogo" className="h-8 bg-blend-darken" /></Link>
          <div className="md:flex gap-x-1 items-center hidden">
            <NavLink style={active} to="/" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-house-chimney"></i> Beranda</NavLink>
            <NavLink style={active} to="/blogs" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-book-open"></i> Artikel</NavLink>
            <NavLink style={active} to="/organizations" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-swatchbook"></i> Organisasi</NavLink>
            <NavLink style={active} to="/about" className="py-2 px-3 hover:bg-teal-700 rounded-lg"><i className="fa mr-1 fa-briefcase"></i> Tentang</NavLink>
          </div>
          <div className="flex gap-x-1 items-center">
            <i className="fa text-xl fa-comment-dots hover:text-teal-700 cursor-pointer" onClick={() => document.querySelector('.mail').classList.toggle('scale-0')}></i>
            <i className="mode fa md:ml-3 ml-4 lg:mx-6 text-2xl text-teal-800 fa-moon cursor-pointer lg:hover:text-slate-100" onClick={() => darkMode()}></i>
            <a target="_blank" href="https://github.com/saifuddien/ppi_web" className="hidden lg:block  py-2 px-3 hover:bg-teal-700 dark:hover:bg-teal-700 bg-teal-500 dark:bg-teal-600 rounded-lg"><i className="fab mr-1 fa-github"></i> <span className="git">Github</span></a>
          </div>
          <div className="absolute right-0 top-16 scale-0 transition duration-500 md:w-96 w-[85%] md:mx-0 mx-4 mail text-[#111111] rounded-xl border dark:text-slate-100">
            <Mailing />
          </div>
        </div>
        <div className="md:hidden gap-x-1 items-center flex fixed bottom-0 left-0 right-0 justify-around text-xl py-2 bg-teal-600  dark:bg-teal-800">
          <NavLink style={active} to="/" className="py-2 px-3 rounded-lg"><i className="fa fa-house-chimney"></i></NavLink>
          <NavLink style={active} to="/blogs" className="py-2 px-3 rounded-lg"><i className="fa fa-book-open"></i></NavLink>
          <NavLink style={active} to="/organizations" className="py-2 px-3 rounded-lg"><i className="fa fa-swatchbook"></i></NavLink>
          <NavLink style={active} to="/about" className="py-2 px-3 rounded-lg"><i className="fa fa-briefcase"></i></NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;