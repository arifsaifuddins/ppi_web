import { Outlet, useNavigate } from "react-router-dom";

function Thesis() {

  const navigate = useNavigate()
  const searchBox = (e) => {
    e.target.nextElementSibling.classList.toggle('scale-0')
  }

  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-teal-600 relative flex items-center justify-between">
        <span >Thesises PDF</span>
        <i onClick={(e) => searchBox(e)} className="fa fa-search searchicon text-teal-600 font-bold cursor-pointer hover:text-teal-600 rounded-full p-2 border"></i>
        <div className="p-2 bg-white shadow rounded-lg absolute right-0 top-16 scale-0 transition duration-500 dark:bg-[#222222]">
          <input type="text" placeholder="Search Blog..." className="bg-transparent py-1 pl-2 rounded-full text-sm  border outline-none border-teal-600 w-[100%]" onChange={(e) => navigate(`/organizations/thesis/s/${e.target.value}`)} />
        </div></h3>
      <h1 className="md:text-3xl text-2xl font-bold my-3">Do you know, <br />you can read it now here?</h1>
      <Outlet />
    </div>

  );
}

export default Thesis;