import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../../Gets";
import Empty from "../../layouts/Empty";
import Loader from "../../Loader";
import BlogPost from "../../templates/BlogPost";

function All() {

  const phpurl = import.meta.env.VITE_PHPURL
  const [Blogs, setBlogs] = useState(null)
  const [PageAll, setPageAll] = useState(0)

  useEffect(() => {
    getBlogs(PageAll).then(a => {
      setBlogs(a)
    })
  }, [PageAll])


  return (
    <div className="flex flex-col mt-10">
      {
        (Blogs == null) ? (
          <Loader />
        ) : (
          <div>
            <div className="px-4 md:px-0">
              <h3 className="text-teal-600">Semua Artikel</h3>
              <h1 className="lg:text-3xl text-2xl font-bold my-3">Baca Semua Artikel Kami.</h1>
            </div>
            {
              Blogs.data != null ? (
                <div className="flex flex-col mt-10">
                  <div className="flex flex-col md:rounded-xl shadow-lg hover:shadow-xl overflow-hidden bg-white dark:shadow-black dark:shadow-lg dark:bg-transparent dark:hover:bg-[#333333]">
                    <Link to={`/blog/${Blogs.data[0].slug}`} className="relative">
                      <img src={phpurl + '/files/' + Blogs.data[0].blog_poster} alt="poster" className="w-full h-[450px] object-cover hover:object-right-bottom transition-all duration-500" />
                      <div className="flex justify-end bg-cover text-slate-100 flex-col absolute right-0 bottom-0 left-0">
                        <h1 className="lg:text-4xl text-2xl font-bold p-4 bg-opacity-50 bg-slate-900 hover:underline hover:text-teal-600">{Blogs.data[0].title}</h1>
                      </div>
                    </Link>
                  </div>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-8 mt-5 pt-10">
                    {
                      Blogs.data.map(o => (
                        <div key={o.id} className="dark:shadow-black dark:shadow-lg dark:hover:bg-[#333333] rounded-md lg:rounded-xl ">
                          <BlogPost data={o} />
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex items-center gap-4 mx-auto">
                    {
                      Blogs.previouspage != 0 && (
                        <>
                          <a href="#"><i onClick={() => setPageAll(1)} className="hover:text-teal-600 my-10  cursor-pointer fa fa-arrow-left-long pl-1 border-l-2 border-l-black dark:border-l-slate-200"></i></a>
                          <p onClick={() => setPageAll(Blogs.previouspage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600"><a href="#">{Blogs.previouspage}</a></p>
                        </>
                      )
                    }
                    {
                      Blogs.currentpage >= 1 && Blogs.nextpage >= 0 && (
                        <p onClick={() => setPageAll(Blogs.currentpage)} className=" my-11 px-3 cursor-pointer text-white rounded-full bg-teal-600 border border-teal-600"><a href="#">{Blogs.currentpage}</a></p>
                      )
                    }
                    {
                      Blogs.nextpage != 0 && (
                        <>
                          <p onClick={() => setPageAll(Blogs.nextpage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600"><a href="#">{Blogs.nextpage}</a></p>
                          <a href="#"><i className=" hover:text-teal-600 my-10 cursor-pointer fa fa-arrow-right-long pr-1 border-r-2 border-r-black dark:border-r-slate-200" onClick={() => setPageAll(Blogs.totalpage)}></i></a>
                        </>
                      )
                    }
                  </div>
                </div>
              ) : (
                <Empty empty={Blogs.msg} />
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default All;