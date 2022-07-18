import { Link } from "react-router-dom";

function BlogSide({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL

  return (
    <Link to={`/blog/${data.slug}`}>
      <div className="flex p-4 gap-4 justify-between border-t hover:bg-slate-50 dark:hover:bg-slate-700">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold mb-2 text-teal-600 hover:underline">{data.title.slice(0, 40)}...</h1>
          <p className="font-thin text-sm text-slate-500 dark:text-slate-200"><i className="fa mr-1 fa-calendar-days"></i> {data.date} <i className="fa mx-1 fa-eye"></i> {data.viewer}</p>
        </div>
        <img src={phpurl + '/images/' + data.blog_poster} alt="poster" className="h-20 w-20 object-cover rounded-xl" />
      </div>
    </Link>
  );
}

export default BlogSide;