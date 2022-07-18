import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { blogsFav, getCategories } from "../../../Gets";
import Empty from "../../layouts/Empty";
import Loader from "../../Loader";
import BlogSide from "../../templates/BlogSide";
import FindUs from "../../templates/FindUs";
import SendPost from "../../templates/SendPost";

function Blogs() {

  const navigate = useNavigate()
  const [category, setCategory] = useState(null)
  const [Fav, setFav] = useState(null)

  useEffect(() => {
    getCategories().then(a => setCategory(a.data))
    blogsFav(8).then(a => setFav(a))
  }, [])

  const searchBox = (e) => {
    e.target.nextElementSibling.classList.toggle('scale-0')
  }

  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive && '#0F766E',
      color: isActive && '#ffffff'
    }
  }

  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 sm:px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max dark:bg-slate-800">
          <div className="px-4 md:px-0">
            <h1 className="text-2xl pb-4 border-b text-teal-600"># Blogs</h1>
            <div className="flex items-center justify-between gap-4 relative">
              <div className="flex items-center py-4 gap-4 overflow-auto">
                <NavLink to={`/blogs`} className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">All</NavLink>
                {
                  category != null && category.map(c => (<NavLink key={c._id} style={active} to={`/blogs/category/${c.name}`} className="py-1 px-4 text-sm hover:bg-teal-600 border border-teal-600 hover:text-white rounded-full">{c.name}</NavLink>))
                }
              </div>
              <i onClick={(e) => searchBox(e)} className="fa fa-search searchicon text-teal-600 font-bold cursor-pointer hover:text-teal-600 rounded-full p-2 border"></i>
              <div className="p-2 bg-white shadow rounded-lg absolute right-0 top-16 scale-0 transition duration-500 dark:bg-slate-800">
                <input type="text" placeholder="Search Blog..." className="bg-transparent py-1 pl-2 rounded-full text-sm  border outline-none border-teal-600 w-[100%]" onChange={(e) => navigate(`/blogs/${e.target.value}`)} />
              </div>
            </div>
          </div>
          <Outlet />
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
          <div className="bg-white shadow rounded-xl overflow-hidden dark:bg-slate-800">
            <h1 className="text-2xl p-4 font-bold">Favorite Blogs</h1>
            {
              (Fav == null) ? (
                <div className="border-t">
                  <Loader />
                </div>
              ) : (
                <>
                  {
                    (Fav.data != null) ? (
                      Fav.data.map(o => (<BlogSide data={o} key={o.id} />))
                    ) : (
                      <Empty empty={Fav.msg} />
                    )
                  }
                </>
              )
            }
          </div>

          <FindUs />

          <SendPost />
        </div>
      </div>
    </>
  );
}

export default Blogs;