import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { delBlogs, getBlog, getBlogsCat } from "../../../Gets";
import BlogSide from "../../templates/BlogSide";
import parse from 'html-react-parser';
import SendPost from "../../templates/SendPost";
import Loader from "../../Loader";
import Empty from "../../layouts/Empty";
import { Helmet } from "react-helmet";

function Blog() {

  const phpurl = import.meta.env.VITE_PHPURL

  const { slug } = useParams()
  const [Cate, setCate] = useState(null)
  const [Blogs, setBlogs] = useState(null)

  const category = Blogs != null && Blogs.data != null ? Blogs.data[0].category : null

  useEffect(() => {
    getBlogsCat(0, category).then(a => setCate(a))
  }, [category])

  useEffect(() => {
    getBlog(slug).then(a => setBlogs(a))
  }, [slug])

  return (
    <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
      <div className="flex flex-col lg:px-8 sm:px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max  dark:bg-[#222222]">
        <Link to={'/blogs'} className="text-2xl pb-4 lg:px-0 px-4 md:px-0 border-b text-teal-600"># Blogs<span className="text-[#222222] dark:text-slate-200 text-xl font-thin"> {'>'} {Blogs != null && Blogs.data != null ? Blogs.data[0].title.length < 15 ? Blogs.data[0].title : Blogs.data[0].title.slice(0, 15) + '...' : 'Empty'}</span></Link>
        {
          (Blogs == null) ? (
            <Loader />
          ) : (
            <>
              {
                (Blogs.data != null) ? (
                  <div className="flex flex-col">
                    <Helmet>
                      <title>PPi Sudan - Blog - {Blogs.data[0].title}</title>
                      <meta property="og:title" content="PPI Sudan - Persatuan Pelajar Indonesia" />
                      <meta property="og:type" content="article" />
                      <meta property="og:url" content="https://ppisudan.com" />
                      <meta property="og:locale" content="en_GB" />
                      <meta property="og:description" content={`${Blogs.data[0].category + ' - ' + Blogs.data[0].title}`} />
                      <meta property="og:image" itemprop="image" content={`${phpurl + '/files/' + Blogs.data[0].blog_poster}`} />
                    </Helmet>
                    <div className="px-4 md:px-0">
                      <Link to={`/blogs/category/${Blogs.data[0].category}`}><p className=" font-bold hover:text-teal-700 py-1 px-2 rounded-lg bg-slate-100 w-max mt-6 text-sm lg:text-lg dark:bg-[#333]">{Blogs.data[0].category} Category</p></Link>
                      <h1 className="md:text-4xl text-3xl font-bold mt-5 text-teal-600">{Blogs.data[0].title}</h1>
                      <div className="flex md:gap-4 gap-2 text-slate-500 py-5 mb-8 items-center">
                        <Link to={`/blogs/author/${Blogs.data[0].author}`}><i className="fa mr-1 fa-user inline"></i><p className="text-teal-600 hover:text-teal-700 hover:underline inline"> {Blogs.data[0].author}</p></Link>
                        <p><i className="fa mr-1 fa-calendar-days"></i> {Blogs.data[0].date}</p>
                        <p><i className="fa mr-1 fa-eye"></i> {Blogs.data[0].viewer}</p>
                        {
                          localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
                            <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer ml-4" onClick={() => delBlogs(Blogs.data[0].id)}></i>
                          )
                        }
                      </div>
                    </div>
                    <img src={phpurl + '/files/' + Blogs.data[0].blog_poster} alt="banner-post" className="mb-8" />
                    <article className="px-4 md:px-0">
                      <p>{parse(Blogs.data[0].body)}</p>
                    </article>
                  </div>
                ) : (
                  <Empty empty={Blogs.msg} />
                )
              }
            </>
          )
        }
      </div>

      {/* sidebar */}

      <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
        <div className="bg-white shadow rounded-xl overflow-hidden dark:bg-[#222222]">
          <h1 className="text-2xl p-4 font-bold">{Blogs != null && Blogs.data != null ? Blogs.data[0].category : 'Empty'} Category</h1>
          {
            (Cate == null) ? (
              <div className="border-t">
                <Loader />
              </div>
            ) : (
              <>
                {
                  (Cate.data != null) ? (
                    Cate.data.map(o => (<BlogSide data={o} key={o.id} />))
                  ) : (
                    <Empty empty={Cate.msg} />
                  )
                }
              </>
            )
          }
        </div>

        <SendPost />
      </div>
    </div >
  );
}

export default Blog;