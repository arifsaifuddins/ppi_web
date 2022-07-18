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
    getBlogs(PageAll).then(a => setBlogs(a))
  }, [PageAll])

  return (
    <div className="flex flex-col mt-10">
      {
        (Blogs == null) ? (
          <Loader />
        ) : (
          <>
            <div className="px-4 md:px-0">
              <h3 className="text-teal-600">All Posts</h3>
              <h1 className="lg:text-3xl text-2xl font-bold my-3">Read All of Our Post.</h1>
            </div>
            {
              Blogs.data != null ? (
                <div className="flex flex-col mt-10">
                  <div className="flex flex-col md:rounded-xl shadow-lg hover:shadow-xl  overflow-hidden bg-white dark:bg-slate-900">
                    <Link to={`/blog/${Blogs.data[0].slug}`}>
                      <div className={`flex justify-end bg-cover pt-60 text-white bg-[url('${phpurl}/images/${Blogs.data[0].blog_poster}')] flex-col`}>
                        <h1 className="text-4xl font-bold p-4 bg-opacity-25 bg-slate-700 text-teal-600 hover:underline hover:text-teal-700">{Blogs.data[0].title.slice(0, 40)}...</h1>
                        <p className="font-light text-xl pb-4 px-4 bg-slate-700 bg-opacity-25">{Blogs.data[0].body.replace(/<[^>]+>/g, '').replaceAll('&nbsp;', '').trim().slice(0, 120)}...</p>
                      </div>
                    </Link>
                    <div className="flex justify-between items-center text-slate-500 px-4 pt-4 text-sm">
                      <Link to={`/blogs/author/${Blogs.data[0].author}`}><i className="fa mr-1 fa-user inline"></i><p className="text-teal-600 hover:text-teal-700 hover:underline inline"> {Blogs.data[0].author}</p></Link>
                      <Link to={`/blogs/category/${Blogs.data[0].category}`}><p className="text-teal-600 hover:text-teal-700 hover:underline">{Blogs.data[0].category}</p></Link>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 px-4 pb-4 text-sm mt-1">
                      <p><i className="fa mr-1 fa-calendar-days"></i> {Blogs.data[0].date}</p>
                      <p><i className="fa mr-1 fa-eye"></i> {Blogs.data[0].viewer}</p>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-8 mt-20">
                    {
                      Blogs.data.map(o => (
                        <div key={o.id} className="dark:bg-slate-900 rounded-xl transition duration-700 dark:hover:bg-slate-700">
                          <BlogPost data={o} />
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex items-center gap-4 py-10 mx-auto">
                    {
                      Blogs.previouspage != 0 && (
                        <>
                          <i onClick={() => setPageAll(1)} className=" cursor-pointer fa fa-arrow-left-long pl-1 border-l-2 border-l-black dark:border-l-slate-200"></i>
                          <i onClick={() => setPageAll(Blogs.previouspage)} className=" cursor-pointer fa fa-arrow-left"></i>
                          <p onClick={() => setPageAll(Blogs.previouspage)} className="px-3 cursor-pointer py-1 hover:bg-teal-600 rounded-full border border-teal-600">{Blogs.previouspage}</p>
                        </>
                      )
                    }
                    {
                      Blogs.previouspage != 0 && Blogs.currentpage != 1 && Blogs.nextpage != 0 && (
                        <p onClick={() => setPageAll(Blogs.currentpage)} className="px-3 cursor-pointer py-1 text-white rounded-full bg-teal-600 border border-teal-600">{Blogs.currentpage}</p>
                      )
                    }
                    {
                      Blogs.nextpage != 0 && (
                        <>
                          <p onClick={() => setPageAll(Blogs.nextpage)} className="px-3 cursor-pointer py-1 hover:bg-teal-600 rounded-full border border-teal-600">{Blogs.nextpage}</p>
                          <i onClick={() => setPageAll(Blogs.nextpage)} className=" cursor-pointer fa fa-arrow-right"></i>
                          <i className=" cursor-pointer fa fa-arrow-right-long pr-1 border-r-2 border-r-black dark:border-r-slate-200" onClick={() => setPageAll(Blogs.totalpage)}></i>
                        </>
                      )
                    }
                  </div>
                </div>
              ) : (
                <Empty empty={Blogs.msg} />
              )
            }
          </>
        )
      }
    </div>
  );
}

export default All;