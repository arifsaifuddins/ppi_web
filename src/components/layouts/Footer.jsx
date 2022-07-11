import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-800 text-slate-200 pb-16 md:pb-0 border-t-8 border-teal-600">
      <div className="lg:flex-row flex flex-col py-16 items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4 border-b">
        <Link to={'/'}><div className="flex flex-col items-center">
          <img src="/assets/img/ppisudan.png" alt="logo" className="w-20 h-20" />
          <h1 className="text-3xl mb-4 text-green-600 font-semibold mt-2">PPISUDAN</h1>
          <p className="text-sm font-thin text-black">اتحاد الطلبة الإندونيسيين بالسودان</p>
          <p className="text-sm font-thin">Indonesian Students Association in Sudan</p>
          <p className="text-sm">Persatuan Pelajar Indonesia Sudan</p>
          <p className="py-1 px-4 hover:bg-teal-700 bg-teal-600 text-white rounded-full text-sm mt-5"><i className="fa fa-eye mr-1"></i>100 Visited</p>
        </div></Link>
        <div className="flex flex-col text-slate-400 self-start mt-20 lg:mt-0 lg:py-0 py-10 w-full lg:w-max border-y lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Products</h1>
          <Link to="/" className="mb-2 hover:text-teal-600">Home</Link>
          <Link to="/blogs" className="mb-2 hover:text-teal-600">Blogs</Link>
          <Link to="/organizations" className="mb-2 hover:text-teal-600">Organizations</Link>
          <Link to="/about" className="mb-2 hover:text-teal-600">About</Link>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 pb-10 w-full lg:w-max border-b lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Post Categories</h1>
          <Link to="#" className="mb-2 hover:text-teal-600">News</Link>
          <Link to="#" className="mb-2 hover:text-teal-600">Islamic</Link>
          <Link to="#" className="mb-2 hover:text-teal-600">Live</Link>
          <Link to="#" className="mb-2 hover:text-teal-600">Common</Link>
          <Link to="#" className="mb-2 hover:text-teal-600">Othes</Link>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 pb-10 w-full lg:w-max border-b lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Social Medias</h1>
          <a href="#" className="mb-2 hover:text-teal-600">Facebook</a>
          <a href="#" className="mb-2 hover:text-teal-600">Instagram</a>
          <a href="#" className="mb-2 hover:text-teal-600">Twitter</a>
          <a href="#" className="mb-2 hover:text-teal-600">Youtube</a>
          <a href="#" className="mb-2 hover:text-teal-600">WhatsApp</a>
          <a href="#" className="mb-2 hover:text-teal-600">Email</a>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 w-full lg:w-max">
          <h1 className="font-semibold mb-4 text-xl text-white">Autonomous</h1>
          <Link to="/organizations/section/pppi" className="mb-2 hover:text-teal-600">PPPI Sudan</Link>
          <Link to="/organizations/section/elnilein" className="mb-2 hover:text-teal-600">El Nilein</Link>

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