import { Link } from "react-router-dom";
import BlogPost from "../templates/BlogPost";
import Mars from "../templates/Mars";

function Home() {
  const data = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex flex-col">
      <div className="bg-slate-800 text-slate-200">
        <div className="lg:flex-row flex flex-col-reverse items-center lg:items-start justify-between mx-auto md:w-[90%] md:px-0 w-full px-4">
          <div className="flex flex-col py-24 lg:w-[45%] items-center lg:items-start">
            <h1 className="md:text-7xl text-6xl font-bold">PPI <span className="text-teal-600">Sudan</span></h1>
            <p className="text-lg font-thin lg:ml-1">Indonesian Students Association in Sudan</p>
            <p className="text-xl my-5 text-center lg:text-left lg:ml-1">PPI Sudan is an organization for Indonesian students in Sudan, To make stucturely relationship.</p>
            <div className="flex lg:ml-1 gap-x-4 mt-4">
              <Link to="/about"><p className="py-2 px-3 hover:bg-teal-700 bg-teal-600 text-white rounded-lg"><i className="fa fa-link mr-1"></i> More About Us</p></Link>
              <Link to="/contact"><p className="py-2 px-3 hover:border-teal-600 border border-teal-700 rounded-lg"><i className="fa fa-mobile-screen-button mr-1"></i> Contact</p></Link>
            </div>
          </div>
          <img src="/assets/img/box.svg" alt="banner" className="w-[550px] pt-28 lg:mt-10 lg:-mb-52" />
        </div>
      </div>
      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-28 mb-28 lg:mb-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">UPDATED POSTS</h3>
          <h1 className="md:text-4xl text-3xl font-bold my-3">Whats News in PPI Sudan?</h1>
          <p className="text-md">Read 6 latest post, and make you relaxed.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20">
          {
            data.map(o => {
              return (
                <div className="dark:bg-slate-800 rounded-xl dark:hover:bg-slate-700" key={o}>
                  <BlogPost data={o} />
                </div>
              )
            })
          }
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mb-3">
        <path fill="#1E293B" fillOpacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
      </svg>
      <div className="flex bg-slate-800">
        <div className="flex flex-col mx-auto md:w-[90%] md:px-0 sm:px-4 w-full mt-10">
          <div className="px-4 md:px-0">
            <h3 className="text-teal-600">PPI PRESIDENT</h3>
            <h1 className="md:text-4xl text-3xl font-bold my-3 text-white">Do you know who is PPI Sudan president?</h1>
            <p className="text-md text-slate-200">Here is the chosen president.</p>
          </div>
          <div className="mx-auto py-20 md:gap-8 gap-4 md:flex-row flex flex-col">
            <div className="lg:flex-row flex flex-col gap-6 p-4 md:rounded-xl bg-slate-900 text-slate-200 shadow shadow-slate-700 hover:shadow-slate-700 hover:shadow-lg">
              <img src="/assets/img/default.jpg" alt="president" className="lg:h-52 lg:w-52 w-full object-cover" />
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl mb-8 text-white">President</h1>
                <h2><i className="fa mr-1 fa-user"></i> Arya Kurniantoro</h2>
                <p><i className="fa mr-1 fa-location-arrow"></i> Jakarta</p>
                <p><i className="fa mr-1 fa-building"></i> International University of Africa</p>
                <p><i className="fa mr-1 fa-book"></i> Sharia</p>
              </div>
            </div>
            <div className="lg:flex-row flex flex-col gap-6 p-4 md:rounded-xl bg-slate-900 text-slate-200 shadow shadow-slate-700 hover:shadow-slate-700 hover:shadow-lg">
              <img src="/assets/img/default.jpg" alt="president" className="lg:h-52 lg:w-52 w-full object-cover" />
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl mb-8 text-white">Co President</h1>
                <h2><i className="fa mr-1 fa-user"></i> M. Saefurraman</h2>
                <p><i className="fa mr-1 fa-location-arrow"></i> Yogyakarta</p>
                <p><i className="fa mr-1 fa-building"></i> International University of Africa</p>
                <p><i className="fa mr-1 fa-book"></i> Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1E293B" fillOpacity="1" d="M0,224L120,208C240,192,480,160,720,144C960,128,1200,128,1320,128L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>

      <div className="flex flex-col mx-auto md:w-[90%] md:px-0 w-full sm:px-4 mt-28 mb-28 lg:mt-10">
        <div className="px-4 md:px-0">
          <h3 className="text-teal-600">MARS PPI</h3>
          <h1 className="md:text-4xl text-3xl font-bold my-3">Whats the PPI Sudan Mars?</h1>
          <p className="text-md">Hear and Memorize you'll be relaxed with it.</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-20 md:gap-0 items-center mt-10">
          <div className="lg:p-4">
            <Mars />
          </div>
          <img src="/assets/img/music.svg" alt="poster" className="lg:h-72 h-52 lg:mr-20" />
        </div>
      </div>
    </div>
  );
}

export default Home;