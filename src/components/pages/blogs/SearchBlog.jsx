import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchBlogsAut } from "../../../Gets";
import Empty from "../../layouts/Empty";
import Loader from "../../Loader";
import BlogPost from "../../templates/BlogPost";

function SearchBlog() {

  const { s } = useParams()
  const [Blogs, setBlogs] = useState(null)
  const [PageAll, setPageAll] = useState(0)

  useEffect(() => {
    searchBlogsAut(PageAll, s).then(a => setBlogs(a))
  }, [PageAll, s])

  return (
    <div className="flex flex-col mt-10">
      {
        (Blogs == null) ? (
          <Loader />
        ) : (
          <>
            <div className="px-4 md:px-0">
              <h3 className="text-teal-600">Search Posts</h3>
              <h1 className="lg:text-3xl text-2xl font-bold my-3">Searching for {s.charAt(0).toUpperCase() + s.slice(1)} Blog.</h1>
            </div>
            {
              Blogs.data != null ? (
                <div className="flex flex-col mt-10">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-8 ">
                    {
                      Blogs.data.map(o => (
                        <div key={o.id} className="dark:bg-slate-900 rounded-xl dark:hover:bg-slate-700">
                          <BlogPost data={o} />
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex items-center gap-4 mx-auto">
                    {
                      Blogs.previouspage != 0 && (
                        <>
                          <i onClick={() => setPageAll(1)} className=" my-10  cursor-pointer fa fa-arrow-left-long pl-1 border-l-2 border-l-black dark:border-l-slate-200"></i>
                          <i onClick={() => setPageAll(Blogs.previouspage)} className=" my-10  cursor-pointer fa fa-arrow-left"></i>
                          <p onClick={() => setPageAll(Blogs.previouspage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600">{Blogs.previouspage}</p>
                        </>
                      )
                    }
                    {
                      Blogs.currentpage >= 1 && Blogs.nextpage != 0 && (
                        <p onClick={() => setPageAll(Blogs.currentpage)} className=" my-11 px-3 cursor-pointer text-white rounded-full bg-teal-600 border border-teal-600">{Blogs.currentpage}</p>
                      )
                    }
                    {
                      Blogs.nextpage != 0 && (
                        <>
                          <p onClick={() => setPageAll(Blogs.nextpage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600">{Blogs.nextpage}</p>
                          <i onClick={() => setPageAll(Blogs.nextpage)} className=" my-10  cursor-pointer fa fa-arrow-right"></i>
                          <i className="  my-10 cursor-pointer fa fa-arrow-right-long pr-1 border-r-2 border-r-black dark:border-r-slate-200" onClick={() => setPageAll(Blogs.totalpage)}></i>
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

export default SearchBlog;