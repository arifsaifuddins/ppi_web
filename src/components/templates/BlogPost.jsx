import { Link } from "react-router-dom";

function BlogPost({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL
  const body = data.body.replace(/<[^>]+>/g, '').trim()

  return (
    <div className="flex flex-col p-4 rounded-xl w-full shadow-lg hover:shadow-xl bg-white dark:bg-transparent">
      <img src={phpurl + '/images/' + data.blog_poster} alt="poster" className="h-52 object-cover hover:object-right-bottom transition-all duration-300" />
      <Link to={`/blog/${data.slug}`} ><h1 className="text-2xl text-teal-600 font-bold my-4 hover:text-teal-700 hover:underline">{data.title.slice(0, 25)}...</h1>
        <p className="font-light mb-4">{body.replaceAll('&nbsp;', '').trim().slice(0, 70)}...</p></Link>
      <div className="flex justify-between items-center text-slate-500 pt-2 text-sm border-t">
        <Link to={`/blogs/author/${data.author}`}><i className="fa mr-1 fa-user inline"></i><p className="text-teal-600 hover:text-teal-700 hover:underline inline"> {data.author}</p></Link>
        <Link to={`/blogs/category/${data.category}`}><p className="text-teal-600 hover:text-teal-700 hover:underline">{data.category}</p></Link>
      </div>
      <div className="flex justify-between items-center text-slate-500 text-sm mt-1">
        <p><i className="fa mr-1 fa-calendar-days"></i> {data.date}</p>
        <p><i className="fa mr-1 fa-eye"></i> {data.viewer}</p>
      </div>
    </div>
  );
}

export default BlogPost;