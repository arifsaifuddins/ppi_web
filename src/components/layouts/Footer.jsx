import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoriesLim } from "../../Gets";

function Footer({ visit }) {

  const [category, setCategory] = useState(null)
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  useEffect(() => {
    getCategoriesLim(5).then(a => setCategory(a.data))
  }, [])

  useEffect(() => {
    if (Cookies.get(adm) && Cookies.get(idadm)) {
      document.querySelector('.admin').innerHTML = 'Admin'
    } else if (!Cookies.get(adm)) {
      document.querySelector('.admin').innerHTML = 'Masuk'
    }
  })

  return (
    <div className="bg-[#222222] drop-shadow-sm text-slate-200 pb-16 md:pb-0 border-t-8 border-teal-600 dark:border-teal-800 mt-40">
      <div className="lg:flex-row flex flex-col py-20 items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4 border-b">
        <div className="flex flex-col items-center">
          <Link to='/' className="flex flex-col items-center">
            <img src="/assets/img/ppisudan.png" alt="logo" className="w-24 h-24" />
            <h1 className="text-3xl mb-4 text-[#51A274] font-semibold mt-4">PPISUDAN</h1>
            <p className="text-sm font-thin text-[#888]">اتحاد الطلبة الإندونيسيين بالسودان</p>
            <p className="text-sm font-thin">Indonesian Students Association in Sudan</p>
            <p className="text-sm">Persatuan Pelajar Indonesia Sudan</p>
          </Link>
          <p className="py-1 px-4 hover:bg-teal-700 bg-teal-600 text-white rounded-full text-sm mt-5"><i className="fa fa-eye mr-1"></i>{visit} Kunjungan</p>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-20 lg:mt-0 lg:py-0 py-10 w-full lg:w-max border-y lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Kategori Post</h1>
          {
            (category != null) && category.map((a, i) => (<Link to={`/blogs/category/${a.name}`} key={i} className="mb-2 hover:text-teal-600">{a.name}</Link>))
          }
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 pb-10 w-full lg:w-max border-b lg:border-0">
          <h1 className="font-semibold mb-4 text-xl text-white">Media Sosial</h1>
          <a className="hover:text-teal-600 mb-2" href="https://facebook.com/ppi.sudan" target="_blank"><i className="fab mr-1 fa-facebook text-blue-800"></i> PPI Sudan</a>
          <a className="hover:text-teal-600 mb-2" href="https://instagram.com/ppisudan" target="_blank"><i className="fab mr-1 fa-instagram text-pink-500"></i> ppisudan</a>
          <a className="hover:text-teal-600 mb-2" href="https://twitter.com/ppisdn_official" target="_blank"><i className="fab mr-1 fa-twitter text-blue-400"></i> ppisudan_official</a>
          <a className="hover:text-teal-600 mb-2" href="http://wa.me/+249122290184" target="_blank"><i className="fab mr-1 fa-whatsapp text-green-500"></i> +249122290184</a>
          <a className="hover:text-teal-600 mb-2" href="https://www.youtube.com/channel/UCcA1WmTIJQmRJDmcFRC70Nw" target="_blank"><i className="fab mr-1 fa-youtube text-red-500"></i> Sudan PPI Tv</a>
          <a className="hover:text-teal-600 mb-2" href="mailto:sudanppi@gmail.com" target="_blank"><i className="fa mr-1 fa-at text-gray-300"></i> sudanppi@gmail.com</a>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:py-0 border-b lg:border-0 pb-10 w-full lg:w-max ">
          <h1 className="font-semibold mb-4 text-xl text-white">Produk</h1>
          <Link to="/" className="mb-2 hover:text-teal-600">Beranda</Link>
          <Link to="/blogs" className="mb-2 hover:text-teal-600">Artikel</Link>
          <Link to="/organizations" className="mb-2 hover:text-teal-600">Organisasi</Link>
          <Link to="/about" className="mb-2 hover:text-teal-600">Tentang</Link>
        </div>
        <div className="flex flex-col text-slate-400 self-start mt-10 lg:mt-0 lg:pb-0 w-full lg:w-max">
          <h1 className="font-semibold mb-4 text-xl text-white">Otonom</h1>
          <Link to="/blogs/category/PPPI" className="mb-2 hover:text-teal-600 flex items-center"><img src="/assets/img/pppisudan.png" alt="pppi" className="h-5 inline mr-2" /> PPPI</Link>
          <a target="_blank" href="https://www.majalahelnilein.com/" className="mb-2 hover:text-teal-600 flex items-center"><img src="/assets/img/elnilein.png" alt="elnilein" className="h-5 inline mr-2" /> El Nilein</a>

          <h1 className="font-semibold my-4 text-xl text-white">Perusahaan</h1>
          <Link to="/admin" className="admin mb-2 hover:text-teal-600">Admin</Link>
          <Link to="/faqs" className="mb-2 hover:text-teal-600">FAQs</Link>
          <Link to="/contact" className="mb-2 hover:text-teal-600">Kontak</Link>
        </div>
      </div>
      <footer className="py-4 text-sm mx-auto w-max lg:py-6 flex flex-col md:flex-row items-center">
        <div>&copy; <Link to={'/'} className="font-bold text-teal-700"> PPI Sudan</Link> | 1982 - {new Date().getFullYear()} <span className="hidden md:inline-block"> | </span> </div>
        <div className="md:ml-1"> Arkaweet49, Khartoum, Sudan | <a target="_blank" href="https://restore.ppisudan.com" className="text-teal-700 underline">Arsip</a></div>
      </footer>
    </div>
  );
}

export default Footer;