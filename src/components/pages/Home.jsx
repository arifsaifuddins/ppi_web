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
        <title>PPi Sudan - Home</title>
        <meta property="og:title" content="PPI Sudan - Persatuan Pelajar Indonesia" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content="Indonesian Students Association in Sudan" />
        <meta property="og:image" itemprop="image" content='https://beta.ppisudan.com/assets/img/ppisudan.png' />
      </Helmet>
      <div className="dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 shadow-lg">
        <div className="lg:flex-row flex flex-col-reverse items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4">
          <div className="flex flex-col py-24 lg:w-[45%] items-center lg:items-start">
            <h1 className="md:text-7xl text-4xl sm:text-6xl mb-5 font-bold">PPI <span className="text-teal-600"><TypeAnimation
              sequence={['Sudan', 3000, 'Khartoum', 2000]}
              cursor={true}
              wrapper="h2"
              repeat={Infinity}
              className="inline"
            /></span></h1>
            <p className="text-md md:text-lg text-center lg:text-left font-thin lg:ml-1">Indonesian Students Association in Sudan</p>
            <p className="md:text-xl text-md mb-5 mt-3 text-center lg:text-left lg:ml-1">PPI Sudan is an organization for Indonesian Students in Sudan, To make stucturely relationship.</p>
            <div className="flex lg:ml-1 gap-x-4 mt-4">
              <Link to="/blogs/category/PPPI"><p className="py-2 px-3 hover:bg-teal-700 bg-teal-600 text-white rounded-lg"><i className="fa fa-link mr-1"></i> See PPPI Posts</p></Link>
              <Link to="/contact"><p className="py-2 px-3 hover:border-teal-600 border border-teal-700 rounded-lg"><i className="fa fa-mobile-screen-button mr-1"></i> Contact</p></Link>
            </div>
          </div>
          <img src="/assets/img/box.svg" alt="banner" className="w-[550px] pt-28 lg:mt-16 lg:-mb-52" />
        </div>
      </div>
      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-28 mb-28 lg:mb-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">UPDATED POSTS</h3>
          <h1 className="md:text-3xl text-2xl font-bold my-3">Whats News in PPI Sudan?</h1>
          <p className="text-md">Read 6 latest post, and make you relaxed.</p>
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
                    Blogs.map((o, i) => <div key={i} className="dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 rounded-md lg:rounded-xl dark:hover:bg-[#333333]">
                      <BlogPost data={o} />
                    </div>)
                  )
                }
              </div>
              <Link to="/blogs" className="text-teal-600 font-bold mt-8 ml-4 hover:text-teal-500 underline">See More Blogs &raquo;</Link>
            </>
          )
        }
      </div>
      <div className="flex dark:bg-[#222222] bg-white text-slate-900 dark:text-slate-200 py-20 my-20 shadow-lg">
        <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-10">
          <div className="px-4 md:px-0">
            <h3 className="text-teal-600">PPI PRESIDENT</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Do you know who is PPI Sudan president?</h1>
            <p className="text-md ">Here is the chosen president.</p>
          </div>
          {
            Pres == null && coPres == null ? (
              <Loader />
            ) : (
              <div className="mx-auto py-20 gap-8 lg:gap-12 md:flex-row flex flex-col">
                {
                  (Pres != null) && (
                    <div className="lg:flex-row flex flex-col gap-6 p-4 lg:rounded-xl dark:bg-[#111] bg-slate-50 text-slate-900 shadow dark:text-slate-200  hover:shadow-md dark:shadow-black">
                      <img src={phpurl + '/files/' + Pres.president_poster} alt="president" className="lg:w-52 lg:h-52 w-full object-cover" />
                      <div className="py-4 lg:py-0">
                        <h1 className="font-bold text-2xl mb-4 text-teal-600">President</h1>
                        <h2 className="font-bold mb-4 text-xl">{Pres.name}</h2>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-location-arrow"></i> {Pres.institute}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-building"></i> {Pres.university}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-book"></i> {Pres.major}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-quote-left"></i> {Pres.quotes.length < 50 ? Pres.quotes : Pres.quotes.slice(0, 50) + '...'}</p>
                      </div>
                    </div>
                  )
                }
                {
                  (coPres != null) && (
                    <div className="lg:flex-row flex flex-col gap-6 p-4 lg:rounded-xl dark:bg-[#111] bg-slate-50 text-slate-900 shadow dark:text-slate-200  hover:shadow-md dark:shadow-black" >
                      <img src={phpurl + '/files/' + coPres.president_poster} alt="copresident" className="lg:w-52 lg:h-52 w-full object-cover" />
                      <div className="py-4 lg:py-0">
                        <h1 className="font-bold text-2xl mb-4 text-teal-600">Co President</h1>
                        <h2 className="font-bold mb-4 text-xl">{coPres.name}</h2>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-location-arrow"></i> {coPres.institute}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-building"></i> {coPres.university}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-book"></i> {coPres.major}</p>
                        <p className="text-sm mb-1"><i className="fa mr-1 fa-quote-left"></i> {coPres.quotes.length < 50 ? coPres.quotes : coPres.quotes.slice(0, 50) + '...'}</p>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }
          <div className="px-4 md:px-0 mt-20">
            <h3 className="text-teal-600">PPI THESISES</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Did you want to read it?</h1>
            <p className="text-md ">Download, and read more!.</p>
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
          <h1 className="md:text-3xl text-2xl font-bold my-3">Whats the PPI Sudan Mars?</h1>
          <p className="text-md">Hear and Memorize you'll be relaxed with it.</p>
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