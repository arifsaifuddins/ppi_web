import { Link } from "react-router-dom";
import BlogPost from "../../templates/BlogPost";
import BlogSide from "../../templates/BlogSide";
import FindUs from "../../templates/FindUs";
import SendPost from "../../templates/SendPost";

function Blogs() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati animi tempore, eius nesciunt facilis exercitationem.'

  const searchBox = (e) => {
    e.target.nextElementSibling.classList.toggle('scale-0')
  }

  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 sm:px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max dark:bg-slate-800">
          <div className="px-4 md:px-0">
            <h1 className="text-2xl pb-4 border-b text-teal-600"># Blogs</h1>
            <div className="flex items-center justify-between gap-4 relative">
              <div className="flex items-center py-4 gap-4 overflow-auto">
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 bg-teal-500 text-white rounded-full">All</p></Link>
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">News</p></Link>
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">Islamic</p></Link>
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">Live</p></Link>
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">Common</p></Link>
                <Link to="/about"><p className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">Others</p></Link>
              </div>
              <i onClick={(e) => searchBox(e)} className="fa fa-search searchicon text-teal-600 font-bold cursor-pointer hover:text-teal-600 rounded-full p-2 border"></i>
              <div className="p-2 bg-white shadow rounded-lg absolute right-0 top-16 scale-0 transition duration-500 dark:bg-slate-800">
                <input type="text" placeholder="Search Blog..." className="bg-transparent py-1 pl-2 rounded-full text-sm  border outline-none border-teal-600 w-[100%]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <div className="px-4 md:px-0">
              <h3 className="text-teal-600">All Posts</h3>
              <h1 className="text-4xl font-bold my-3">Read All of Our Post.</h1>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-col md:rounded-xl shadow-lg hover:shadow-xl  overflow-hidden bg-white dark:bg-slate-900">
                <Link to="/blogs/id">
                  <div className="flex justify-end bg-cover pt-60 text-white bg-[url(/assets/img/default.jpg)] flex-col">
                    <h1 className="text-4xl font-bold p-4 bg-opacity-25 bg-slate-700 text-teal-600 hover:underline hover:text-teal-700">Ini Judul Poster</h1>
                    <p className="font-light text-xl pb-4 px-4 bg-slate-700 bg-opacity-25">{text.slice(0, 100)}...</p>
                  </div>
                </Link>
                <div className="flex justify-between items-center text-slate-500 px-4 pt-4 text-sm">
                  <p><i className="fa mr-1 fa-user"></i> Arief Saifuddien</p>
                  <p>News</p>
                </div>
                <div className="flex justify-between items-center text-slate-500 px-4 pb-4 text-sm mt-1">
                  <p><i className="fa mr-1 fa-calendar-days"></i> 22 May 2022</p>
                  <p><i className="fa mr-1 fa-eye"></i> 0</p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-8">
                {
                  data.map(o => {
                    return (
                      <div key={o} className="dark:bg-slate-900 rounded-xl transition duration-700 dark:hover:bg-slate-700">
                        <BlogPost data={o} />
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex items-center gap-4 py-10 mx-auto">
                <i className="fa fa-arrow-left-long pl-1 border-l-2 border-l-black dark:border-l-slate-200"></i>
                <i className="fa fa-arrow-left"></i>
                <p className="px-3 py-1 rounded-full border border-teal-600">1</p>
                <p className="px-3 py-1 text-white rounded-full bg-teal-600">2</p>
                <p className="px-3 py-1 rounded-full border border-teal-600">3</p>
                <i className="fa fa-arrow-right"></i>
                <i className="fa fa-arrow-right-long pr-1 border-r-2 border-r-black dark:border-r-slate-200"></i>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
          <div className="bg-white shadow rounded-xl overflow-hidden dark:bg-slate-800">
            <h1 className="text-2xl p-4 font-bold">Favorite Blogs</h1>
            {
              data.map(o => {
                return (
                  <BlogSide data={o} key={o} />
                )
              })
            }
          </div>

          <FindUs />

          <SendPost />
        </div>
      </div>
    </>
  );
}

export default Blogs;