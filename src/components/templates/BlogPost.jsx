import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { ConfirmAlert } from "./Confirm";

function BlogPost({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL
  const ppi = import.meta.env.VITE_PPI
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  const body = data.body.replace(/<[^>]+>/g, '').trim()

  return (
    <div className="flex flex-col p-4 rounded-xl w-full shadow-lg hover:shadow-xl bg-white dark:bg-transparent lg:hover:scale-[103%] transition-transform">
      <img src={phpurl + '/files/' + data.blog_poster} alt="poster" className="h-52 object-cover hover:object-right-bottom transition-all duration-300" />
      <a href={`${ppi}/blog/index.php?slug=${data.slug}`} ><h1 className="text-2xl text-teal-600 font-bold my-4 hover:text-teal-700 hover:underline">{data.title.length < 40 ? data.title : data.title.slice(0, 40) + '...'}</h1>
        <p className="font-light mb-4">{(body.replaceAll('&nbsp;', '').trim().length < 70) ? body.replaceAll('&nbsp;', '').trim() : body.replaceAll('&nbsp;', '').trim().slice(0, 70) + '...'}</p></a>
      <div className="flex justify-between items-center text-slate-500 pt-2 text-sm border-t">
        <Link to={`/blogs/author/${data.author}`}><i className="fa mr-1 fa-user inline"></i><p className="text-teal-600 hover:text-teal-700 hover:underline inline"> {data.author}</p></Link>
        <Link to={`/blogs/category/${data.category}`}><p className="text-teal-600 hover:text-teal-700 hover:underline">{data.category}</p></Link>
      </div>
      <div className="flex justify-between items-center text-slate-500 text-sm mt-1">
        <p><i className="fa mr-1 fa-calendar-days"></i> {data.date}</p>
        <p> {Cookies.get(adm) && Cookies.get(idadm) && (<i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer mx-4" onClick={() => ConfirmAlert(data.id, 'artikel')}></i>)} <i className="fa mr-1 fa-eye"></i> {data.viewer}</p>
      </div>
    </div>
  );
}

export default BlogPost;