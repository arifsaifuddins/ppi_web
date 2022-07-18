import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoriesLim } from "../../Gets";

function Footer({ visit }) {

  const [category, setCategory] = useState(null)

  useEffect(() => {
    getCategoriesLim(5).then(a => setCategory(a.data))
  }, [])

  return (
    <div className="bg-slate-800 text-slate-200 pb-16 md:pb-0 border-t-2 border-teal-600 mt-20">
      <div className="lg:flex-row flex flex-col py-16 items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4 border-b">
        <div className="flex flex-col items-center">
          <Link to='/' className="flex flex-col items-center">
            <img src="/assets/img/ppisudan.png" alt="logo" className="w-20 h-20" />
            <h1 className="text-3xl mb-4 text-[#51A274] font-semibold mt-2">PPISUDAN</h1>
            <p className="text-sm font-thin text-black">اتحاد الطلبة الإندونيسيين بالسودان</p>
            <p className="text-sm font-thin">Indonesian Students Association in Sudan</p>
            <p className="text-sm">Persatuan Pelajar Indonesia Sudan</p>
          </Link>
          <p className="py-1 px-4 hover:bg-teal-700 bg-teal-600 text-white rounded-full text-sm mt-5"><i className="fa fa-eye mr-1"></i>{visit} Visited</p>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-20 lg:mt-0 lg:py-0 py-10 w-full lg:w-max border-y lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Products</h1>
          <Link to="/" className="mb-2 hover:text-teal-600">Home</Link>
          <Link to="/blogs" className="mb-2 hover:text-teal-600">Blogs</Link>
          <Link to="/organizations" className="mb-2 hover:text-teal-600">Organizations</Link>
          <Link to="/about" className="mb-2 hover:text-teal-600">About</Link>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 pb-10 w-full lg:w-max border-b lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Post Categories</h1>
          {
            (category != null) && category.map((a, i) => (<Link to={`/blogs/category/${a.name}`} key={i} className="mb-2 hover:text-teal-600">{a.name}</Link>))
          }
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 pb-10 w-full lg:w-max border-b lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Social Medias</h1>
          <a className="hover:text-teal-600 mb-2" href="https://facebook.com/ppi.sudan" target="_blank"><i className="fab mr-1 fa-facebook text-blue-800"></i> Facebook</a>
          <a className="hover:text-teal-600 mb-2" href="https://instagram.com/ppisudan" target="_blank"><i className="fab mr-1 fa-instagram text-pink-500"></i> Instagram</a>
          <a className="hover:text-teal-600 mb-2" href="https://twitter.com/ppisdn_official" target="_blank"><i className="fab mr-1 fa-twitter text-blue-400"></i> Twitter</a>
          <a className="hover:text-teal-600 mb-2" href="http://wa.me/+249122290184" target="_blank"><i className="fab mr-1 fa-whatsapp text-green-500"></i> WhatsApp</a>
          <a className="hover:text-teal-600 mb-2" href="https://www.youtube.com/channel/UCcA1WmTIJQmRJDmcFRC70Nw" target="_blank"><i className="fab mr-1 fa-youtube text-red-500"></i> YouTube</a>
          <a className="hover:text-teal-600 mb-2" href="mailto:sudanppi@gmail.com" target="_blank"><i className="fa mr-1 fa-at text-gray-300"></i> Mail</a>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 w-full lg:w-max">
          <h1 className="font-semibold mb-4 text-xl text-white">Autonomous</h1>
          <Link to="/blogs/category/PPPI" className="mb-2 hover:text-teal-600 flex items-center"><img src="/assets/img/pppisudan.png" alt="pppi" className="h-5 inline mr-2" /> PPPI</Link>
          <a target="_blank" href="https://www.majalahelnilein.com/" className="mb-2 hover:text-teal-600 flex items-center"><img src="/assets/img/elnilein.png" alt="elnilein" className="h-5 inline mr-2" /> El Nilein</a>

          <h1 className="font-semibold my-4 text-xl text-white">Company</h1>
          <Link to="/faqs" className="mb-2 hover:text-teal-600">FAQs</Link>
          <Link to="/contact" className="mb-2 hover:text-teal-600">Contact</Link>
        </div>
      </div>
      <footer className="py-6 text-sm text-center">&copy; 1982 - {new Date().getFullYear()} <Link to={'/'} className="font-bold text-teal-700">PPI Sudan</Link> | Khartoum, Sudan</footer>
    </div>
  );
}

export default Footer;