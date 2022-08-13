import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogsCat, getBlogv } from "../../../Gets";
import BlogSide from "../../templates/BlogSide";
import parse from 'html-react-parser';
import SendPost from "../../templates/SendPost";
import Loader from "../../Loader";
import Empty from "../../layouts/Empty";
import Cookies from "js-cookie";
import { Title } from "react-head";
import { confirmAlert } from "react-confirm-alert";

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
    getBlogv(slug).then(a => setBlogs(a))
  }, [slug])

  const Info = (msgs) => {
    confirmAlert({
      message: msgs,
      buttons: [
        {
          label: 'Oke',
          onClick: () => {
            null
          }
        }
      ]
    })
  }

  const Copy = () => {

    try {
      const dummy = document.createElement('input')

      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select()
      const successful = document.execCommand('copy');
      const msg = successful ? 'URL berhasil disalin' : 'URL gagal disalin';
      document.body.removeChild(dummy);
      Info(msg)
    } catch (err) {
      Info('Oops, URL ada error')
    }
  }

  const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  return (
    <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
      <div className="flex flex-col lg:px-8 sm:px-4 py-4 bg-white shadow rounded-xl w-full lg:w-[68%] h-max  dark:bg-[#222222]">
        <Link to={'/blogs'} className="text-2xl pb-4 lg:px-0 px-4 md:px-0 border-b text-teal-600"># Artikel<span className="text-[#222222] dark:text-slate-200 text-xl font-thin"> {'>'} {Blogs != null && Blogs.data != null ? Blogs.data[0].title.length < 15 ? Blogs.data[0].title : Blogs.data[0].title.slice(0, 15) + '...' : 'Memuat...'}</span></Link>
        {
          (Blogs == null) ? (
            <Loader />
          ) : (
            <>
              {
                (Blogs.data != null) ? (
                  <div className="flex flex-col">
                    <Title>{`PPI Sudan - Artikel - ${Blogs.data[0].title}`}</Title>
                    <div className="px-4 md:px-0">
                      <div className="flex items-center mt-6 justify-between">
                        <Link to={`/blogs/category/${Blogs.data[0].category}`}><p className=" font-bold hover:text-teal-700 py-1 px-2 rounded-lg bg-slate-100 w-max text-sm lg:text-lg dark:bg-[#333]">{Blogs.data[0].category}</p></Link>
                        {
                          Cookies.get('admin') && Cookies.get('id_admin') && (
                            <div className="w-max">
                              <Link to={`/blog/edit/${Blogs.data[0].slug}`} className="fa fa-edit text-teal-600 hover:text-teal-700 cursor-pointer mx-4"></Link>
                              <i className="fa fa-share text-blue-500 hover:text-blue-700 cursor-pointer ml-4" onClick={() => Copy()}></i>
                            </div>
                          )
                        }
                      </div>
                      <h1 className="md:text-4xl text-3xl font-bold mt-5 text-teal-600">{Blogs.data[0].title}</h1>
                      <div className="flex md:gap-4 gap-2 text-slate-500 py-5 mb-8 items-center">
                        <Link to={`/blogs/author/${Blogs.data[0].author}`}><i className="fa mr-1 fa-user inline"></i><p className="text-teal-600 hover:text-teal-700 hover:underline inline"> {Blogs.data[0].author}</p></Link>
                        <p><i className="fa mr-1 fa-calendar-days"></i> {Blogs.data[0].date.split('-')[2]} {Blogs.data[0].date.split('-')[1] == '01' ? month[0] : Blogs.data[0].date.split('-')[1] == '02' ? month[1] : Blogs.data[0].date.split('-')[1] == '03' ? month[2] : Blogs.data[0].date.split('-')[1] == '04' ? month[3] : Blogs.data[0].date.split('-')[1] == '05' ? month[4] : Blogs.data[0].date.split('-')[1] == '06' ? month[5] : Blogs.data[0].date.split('-')[1] == '07' ? month[6] : Blogs.data[0].date.split('-')[1] == '08' ? month[7] : Blogs.data[0].date.split('-')[1] == '09' ? month[8] : Blogs.data[0].date.split('-')[1] == '10' ? month[9] : Blogs.data[0].date.split('-')[1] == '11' ? month[10] : month[11]}, {Blogs.data[0].date.split('-')[0]}</p>
                        <p><i className="fa mr-1 fa-eye"></i> {Blogs.data[0].viewer}</p>
                      </div>
                    </div>
                    <img src={phpurl + '/files/' + Blogs.data[0].blog_poster} alt="banner-post" className="mb-8" />
                    <article className="px-4 md:px-0 mb-10 w-full">
                      {parse(Blogs.data[0].body)}
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

      <div className="flex flex-col lg:w-[30%] w-full lg:mx-0 gap-8">
        <div className="bg-white shadow rounded-xl overflow-hidden dark:bg-[#222222]">
          <h1 className="text-2xl p-4 font-bold">Kategori {Blogs != null && Blogs.data != null ? Blogs.data[0].category : 'Memuat...'}</h1>
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