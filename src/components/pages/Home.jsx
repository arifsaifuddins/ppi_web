import { Link } from "react-router-dom";
import BlogPost from "../templates/BlogPost";
import Mars from "../templates/Mars";
import TypeAnimation from 'react-type-animation';
import { useEffect, useState } from "react";
import { blogsDis, getcoPres, getPres } from "../../Gets";

function Home() {
  const nodeurl = import.meta.env.VITE_NODEURL

  const [Pres, setPres] = useState(null)
  const [coPres, setcoPres] = useState(null)
  const [Blogs, setBlogs] = useState(null)

  useEffect(() => {
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
      <div className="dark:bg-[#111111] bg-white text-slate-900 dark:text-slate-200 shadow-lg">
        <div className="lg:flex-row flex flex-col-reverse items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4">
          <div className="flex flex-col py-24 lg:w-[45%] items-center lg:items-start">
            <h1 className="md:text-7xl text-5xl sm:text-6xl mb-5 font-bold">PPI <span className="text-teal-600"><TypeAnimation
              sequence={['Sudan', 3000, 'Khartoum', 2000]}
              cursor={true}
              wrapper="h2"
              repeat={Infinity}
              className="inline"
            /></span></h1>
            <p className="text-lg font-thin lg:ml-1">Indonesian Students Association in Sudan</p>
            <p className="text-xl mb-5 mt-3 text-center lg:text-left lg:ml-1">PPI Sudan is an organization for Indonesian students in Sudan, To make stucturely relationship.</p>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20">
          {
            (Blogs != null) && (
              Blogs.map((o, i) => <div key={i} className="dark:bg-[#111111] bg-white text-slate-900 dark:text-slate-200 rounded-xl dark:hover:bg-[#222222]">
                <BlogPost data={o} />
              </div>)
            )
          }
        </div>
        <Link to="/blogs" className="text-teal-600 font-bold mt-4 ml-2 hover:text-teal-500 underline">See More Blogs &raquo;</Link>
      </div>
      <div className="flex dark:bg-[#111111] bg-white text-slate-900 dark:text-slate-200 py-20 my-20 shadow-lg">
        <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-10">
          <div className="px-4 md:px-0">
            <h3 className="text-teal-600">PPI PRESIDENT</h3>
            <h1 className="md:text-3xl text-2xl font-bold my-3">Do you know who is PPI Sudan president?</h1>
            <p className="text-md ">Here is the chosen president.</p>
          </div>
          <div className="mx-auto py-20 lg:px-4 md:gap-8 gap-4 md:flex-row flex flex-col">
            {
              (Pres != null) && (
                <div className="lg:flex-row flex flex-col gap-6 p-4 md:rounded-xl dark:bg-black bg-slate-50 text-slate-900 shadow-lg dark:text-slate-200  hover:shadow-xl dark:shadow-none">
                  <img src={nodeurl + '/../med/' + Pres.president_poster} alt="president" className="lg:w-52 lg:h-52 w-full object-cover" />
                  <div>
                    <h1 className="font-bold text-2xl mb-4 text-teal-600">President</h1>
                    <h2 className="font-bold mb-2"><i className="fa mr-1 fa-user"></i> {Pres.name}</h2>
                    <p><i className="fa mr-1 fa-location-arrow"></i> {Pres.institute}</p>
                    <p><i className="fa mr-1 fa-building"></i> {Pres.university}</p>
                    <p><i className="fa mr-1 fa-book"></i> {Pres.major}</p>
                    <p><i className="fa mr-1 fa-quote-left"></i> {Pres.quotes.slice(1, 50)}...</p>
                  </div>
                </div>
              )
            }
            {
              (coPres != null) && (
                <div className="lg:flex-row flex flex-col gap-6 p-4 md:rounded-xl dark:bg-black bg-slate-50 text-slate-900 shadow-lg dark:text-slate-200  hover:shadow-xl dark:shadow-none" >
                  <img src={nodeurl + '/../med/' + coPres.president_poster} alt="copresident" className="lg:w-52 lg:h-52 w-full object-cover" />
                  <div>
                    <h1 className="font-bold text-2xl mb-4 text-teal-600">Co President</h1>
                    <h2 className="font-bold mb-2"><i className="fa mr-1 fa-user"></i> {coPres.name}</h2>
                    <p><i className="fa mr-1 fa-location-arrow"></i> {coPres.institute}</p>
                    <p><i className="fa mr-1 fa-building"></i> {coPres.university}</p>
                    <p><i className="fa mr-1 fa-book"></i> {coPres.major}</p>
                    <p><i className="fa mr-1 fa-quote-left"></i> {coPres.quotes.slice(1, 50)}...</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 w-full sm:px-4 mt-28 mb-28 lg:mt-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">MARS PPI</h3>
          <h1 className="md:text-3xl text-2xl font-bold my-3">Whats the PPI Sudan Mars?</h1>
          <p className="text-md">Hear and Memorize you'll be relaxed with it.</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-20 md:gap-0 items-center mt-10">
          <div className="lg:pl-20">
            <Mars />
          </div>
          <img src="/assets/img/music.svg" alt="poster" className="lg:h-72 h-52 lg:mr-20" />
        </div>
      </div>
    </div>
  );
}

export default Home;