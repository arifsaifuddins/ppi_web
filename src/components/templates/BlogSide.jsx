import { Link } from "react-router-dom";

function BlogSide() {
  return (
    <Link to="/blogs/id">
      <div className="flex p-4 gap-4 justify-between border-t hover:bg-slate-50 dark:hover:bg-slate-700">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold mb-2">Judul Blog Side Example</h1>
          <p className="font-thin text-sm text-slate-500 dark:text-slate-200"><i className="fa mr-1 fa-calendar-days"></i> 22 May 2022 <i className="fa mx-1 fa-eye"></i> 0</p>
        </div>
        <img src="/assets/img/default.jpg" alt="poster" className="h-20 w-20 object-cover rounded-xl" />
      </div>
    </Link>
  );
}

export default BlogSide;