import { Link } from "react-router-dom";

function BlogSide({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL

  return (
    <Link to={`/blog/${data.slug}`} className="flex p-4 justify-between items-center border-t hover:bg-slate-50 dark:hover:bg-[#333333]">
      <div className="flex justify-between flex-col w-[70%]">
        <p className="text-xl font-bold mb-2 text-teal-600 hover:underline">{data.title.length < 30 ? data.title : data.title.slice(0, 30) + '...'}</p>
        <p className="font-thin text-sm text-slate-500 dark:text-slate-200"><i className="fa mr-1 fa-calendar-days"></i> {data.date} <i className="fa mx-1 fa-eye"></i> {data.viewer}</p>
      </div>
      <img src={phpurl + '/files/' + data.blog_poster} alt="poster" className="h-20 w-[30%] ml-4 object-cover hover:object-right-bottom transition-all duration-500 rounded-xl" />
    </Link>
  );
}

export default BlogSide;