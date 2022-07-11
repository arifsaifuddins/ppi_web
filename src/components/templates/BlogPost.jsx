import { Link } from "react-router-dom";

function BlogPost({ o }) {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati animi tempore, eius nesciunt facilis exercitationem.'

  return (
    <div className="flex flex-col p-4 rounded-xl shadow-lg hover:shadow-xl bg-white dark:bg-slate-800">
      <img src="/assets/img/default.jpg" alt="poster" className="h-52 object-cover" />
      <Link to="/blogs/id"><h1 className="text-2xl font-bold my-4">Ini Judul Poster</h1>
        <p className="font-light mb-4">{text.slice(0, 100)}...</p></Link>
      <div className="flex justify-between items-center text-slate-500 pt-2 text-sm border-t">
        <p><i className="fa mr-1 fa-user"></i> Arief Saifuddien</p>
        <p>News</p>
      </div>
      <div className="flex justify-between items-center text-slate-500 text-sm mt-1">
        <p><i className="fa mr-1 fa-calendar-days"></i> 22 May 2022</p>
        <p><i className="fa mr-1 fa-eye"></i> 0</p>
      </div>
    </div>
  );
}

export default BlogPost;