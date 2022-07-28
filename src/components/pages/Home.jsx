import { Link } from "react-router-dom";
import BlogPost from "../templates/BlogPost";
import TypeAnimation from 'react-type-animation';
import { useEffect, useState } from "react";
import { blogsDis, getcoPres, getPdfs, getPres } from "../../Gets";
import Loader from "../Loader";
import Pdfs from "../templates/Pdf";
import Empty from "../layouts/Empty";
import { Helmet } from "react-helmet";

function Home() {
  const phpurl = import.meta.env.VITE_PHPURL

  const [Pres, setPres] = useState(null)
  const [coPres, setcoPres] = useState(null)
  const [Blogs, setBlogs] = useState(null)

  const [Pdf, setPdf] = useState(null)

  useEffect(() => {
    getPdfs(0).then(a => setPdf(a))
    blogsDis(6).then(a => setBlogs(a.data))
  }, [])

  useEffect(() => {
    getPres().then(a => {
      setPres(a.data[0])
    })

    getcoPres().then(a => {
      setcoPres(a.data[0])
    })
  }, [])

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>PPI Sudan - Beranda</title>
      </Helmet>
      <div className="dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 shadow-lg">
        <div className="lg:flex-row relative flex flex-col-reverse items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4">
          <div className="flex flex-col py-24 lg:w-[45%] items-center lg:items-start">
            <h1 className="md:text-7xl text-4xl sm:text-6xl mb-5 font-bold">PPI <span className="text-teal-600"><TypeAnimation
              sequence={['Sudan', 3000, 'in', 1000, 'Khartoum', 2000]}
              cursor={true}
              wrapper="h2"
              repeat={Infinity}
              className="inline"
            /></span></h1>
            <p className="text-md md:text-lg text-center lg:text-left font-thin lg:ml-1">Indonesian Students Association in Sudan</p>
            <p className="md:text-xl text-md mb-5 mt-3 text-center lg:text-left lg:ml-1">PPI Sudan adalah Organisasi yang Menaungi Seluruh Pelajar Indonesia yang sedang Menempuh Pendidikan di Sudan</p>
            <div className="flex lg:ml-1 gap-x-4 mt-4">
              <Link to="/blogs/category/PPPI"><p className="py-2 px-3 hover:bg-teal-700 bg-teal-600 text-white rounded-lg"><i className="fa fa-link mr-1"></i> Artikel PPPI</p></Link>
              <Link to="/contact"><p className="py-2 px-3 hover:border-teal-600 border border-teal-700 rounded-lg"><i className="fa fa-mobile-screen-button mr-1"></i> Kontak</p></Link>
            </div>
          </div>
          <div className="w-56 h-56 rounded-full bg-teal-500 absolute mix-blend-multiply filter opacity-50 dark:opacity-0  blur-xl right-16 animate-pulse sm:right-20 top-48"></div>
          <div className="w-40 h-40 rounded-full bg-purple-300 absolute mix-blend-multiply filter opacity-75 dark:opacity-0 animate-blob blur-xl right-52 sm:right-72 top-52"></div>
          <div className="w-32 h-32 rounded-full bg-yellow-300 absolute mix-blend-multiply filter opacity-0  sm:opacity-75 dark:opacity-0 animate-pulse blur-xl right-96 top-80"></div>
          <img src="/assets/img/welcom.svg" alt="banner" className="w-[430px] relative px-8 pt-20 lg:pt-16 lg:mt-16 lg:-mb-52 lg:pl-0 lg:mr-4" />
        </div>
      </div>
      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-28 mb-28 lg:mb-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">ARTIKEL TERBARU</h3>
          <h1 className="md:text-3xl text-2xl font-bold my-3">Apa yang baru di PPI Sudan?</h1>
          <p className="text-md">Berikut enam artikel terbaru kami, baca dan ikuti kami.</p>
        </div>
        {
          Blogs == null ? (
            <div className="flex h-96 w-full">
              <div className="m-auto animate-spin duration-700 w-8 h-8 rounded-full p-1 spin-loader">
                <span className="w-full h-full bg-slate-100 dark:bg-[#111] inline-block rounded-full"></span>
              </div>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20">
                {
                  (Blogs != null) && (
                    Blogs.map((o, i) => <div key={i} className="dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 rounded-md lg:rounded-xl dark:hover:bg-[#333333] lg:hover:scale-[102%] transition-transform">
                      <BlogPost data={o} />
                    </div>)
                  )
                }
              </div>
              <Link to="/blogs" className="text-teal-600 font-bold mt-8 ml-4 hover:text-teal-500 underline">Lihat Postingan Lebih &raquo;</Link>
            </>
          )
        }
      </div>
      <div className="flex dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 py-20 my-20 shadow-lg">
        <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-10">
          <div className="px-4 md:px-0">
            <h3 className="text-teal-600">PRESIDEN PPI</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Tahukah kamu,<br />siapa Presiden PPI Sudan?</h1>
            <p className="text-md ">Yuk, kenalan dengan Presiden dan Wakil terpilihnya.</p>
          </div>
          {
            Pres == null && coPres == null ? (
              <Loader />
            ) : (
              <div className="mx-auto py-20 gap-8 lg:gap-12 md:flex-row flex flex-col">
                {
                  (Pres != null) && (
                    <div className="lg:flex-row flex flex-col gap-6 p-4 lg:rounded-xl dark:bg-[#111] bg-slate-50 text-slate-900 shadow dark:text-slate-200  hover:shadow-md dark:shadow-black lg:hover:scale-[103%] transition-transform ">
                      <img src={phpurl + '/files/' + Pres.president_poster} alt="president" className="lg:w-56 lg:h-56 shadow-lg w-full object-cover" />
                      <div className="py-4 lg:py-0 flex flex-col justify-between">
                        <div>
                          <h1 className="font-bold text-2xl mb-4 text-teal-600">Presiden</h1>
                          <h2 className="font-bold mb-4 text-xl">{Pres.name}</h2>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-location-arrow"></i> {Pres.institute}</p>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-building"></i> {Pres.university}</p>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-quote-left"></i> {Pres.quotes.length < 35 ? Pres.quotes : Pres.quotes.slice(0, 35) + '...'}</p>
                        </div>
                        <Link to="/organizations" className="flex mt-6 lg:mt-2 text-slate-100 font-bold text-xs items-center gap-2 px-2 py-1 rounded-lg bg-teal-600 w-max">
                          <p>Lihat Lebih...</p>
                          <i className="fa fa-angle-up rotate-90 p-2 bg-teal-700 rounded-full cursor-pointer text-md hover:bg-teal-800 "></i>
                        </Link>
                      </div>
                    </div>
                  )
                }
                {
                  (coPres != null) && (
                    <div className="lg:flex-row flex flex-col gap-6 p-4 lg:rounded-xl dark:bg-[#111] bg-slate-50 text-slate-900 shadow dark:text-slate-200  hover:shadow-md dark:shadow-black lg:hover:scale-[103%] transition-transform " >
                      <img src={phpurl + '/files/' + coPres.president_poster} alt="copresident" className="lg:w-56 lg:h-56 shadow-lg w-full object-cover" />
                      <div className="py-4 lg:py-0 flex flex-col justify-between">
                        <div>
                          <h1 className="font-bold text-2xl mb-4 text-teal-600">Wakil Presiden</h1>
                          <h2 className="font-bold mb-4 text-xl">{coPres.name}</h2>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-location-arrow"></i> {coPres.institute}</p>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-building"></i> {coPres.university}</p>
                          <p className="text-sm mb-1"><i className="fa mr-1 fa-quote-left"></i> {coPres.quotes.length < 35 ? coPres.quotes : coPres.quotes.slice(0, 35) + '...'}</p>
                        </div>
                        <Link to="/organizations" className="flex mt-6 lg:mt-2 text-slate-100 font-bold text-xs items-center gap-2 px-2 py-1 rounded-lg bg-teal-600 w-max">
                          <p>Lihat Lebih...</p>
                          <i className="fa fa-angle-up rotate-90 p-2 bg-teal-700 rounded-full cursor-pointer text-md hover:bg-teal-800 "></i>
                        </Link>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }
          <div className="px-4 md:px-0 mt-20">
            <h3 className="text-teal-600">DIGITAL TESIS</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Apakah kamu ingin membacanya?</h1>
            <p className="text-md ">Unduh PDF-nya dan baca lebih!</p>
          </div>
          {
            (Pdf == null) ? (
              <Loader />
            ) : (
              <>
                {
                  (Pdf.data != null) ? (
                    <>
                      <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4 mx-4 lg:mx-0">
                        {
                          Pdf.data.map(data => (<Pdfs key={data.id} data={data} />))
                        }
                      </div>
                      <Link to="/organizations/thesis/" className="text-teal-600 font-bold mt-8 mb-20 ml-4 hover:text-teal-500 underline">See More Thesises &raquo;</Link>
                    </>
                  ) : (
                    <Empty empty={Pdf.msg} />
                  )
                }
              </>
            )
          }
        </div>
      </div>

      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 w-full sm:px-4 mt-24 mb-28 lg:mt-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">MARS PPI</h3>
          <h1 className="md:text-3xl text-2xl font-bold my-3">Tahukah kamu Mars PPI Sudan?</h1>
          <p className="text-md">Dengar, hafalkan dan suarakan.</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-20 md:gap-30 items-center mt-10">
          <div className="lg:pl-20 px-4">
            <div className="flex flex-col items-center p-4 rounded-xl shadow-lg hover:shadow-xl bg-white w-full dark:bg-[#222222]">
              <div className="flex items-center px-4">
                <i className="fa mr-4 fa-music text-4xl p-4 bg-teal-600 rounded-xl text-white"></i>
                <h1 className="text-3xl font-bold">Mars PPI Sudan</h1>
              </div>
              <audio controls src="/assets/mp3/marsppi.mp3" className="w-[100%] mt-10 cursor-pointer"></audio>
            </div>
          </div>
          <img src="/assets/img/music.svg" alt="poster" className="lg:h-72 md:h-56 lg:pr-20 px-12 lg:px-0 pt-10 lg:pt-0" />
        </div>
      </div>
    </div>
  );
}

export default Home;