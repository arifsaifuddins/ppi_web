import { Outlet } from "react-router-dom";
import FindUs from "../../templates/FindUs";
import Options from "./Options";

function Organize() {

  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col-reverse mx-auto lg:my-10 my-4 relative">
        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
          <div className="bg-white side shadow lg:rounded-xl lg:h-max overflow-y-auto transition-all duration-700 lg:overflow-hidden dark:bg-slate-800 fixed left-0 top-0 bottom-0 pt-16 mt-9 lg:mt-0 lg:pt-0 w-[100%] pb-20 lg:pb-0 md:w-[45%] lg:relative lg:w-full lg:block -translate-x-[100%] lg:translate-x-0">
            <div className="flex justify-between items-center text-2xl p-4 font-bold">
              <h1><i className="fa fa-file-lines mr-1 hidden lg:inline"></i> Organizations</h1>
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} className="lg:hidden px-2 rounded-md border text-teal-600">&times;</p>
            </div>

            <Options />

          </div>

          <FindUs />

        </div>

        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl pb-4 border-b text-teal-600 w-full"># <span className="title">Stuctures</span> <span className="text-slate-800 text-xl font-thin"> {'>'} <span className="sub">Presidents</span></span></h1>
            <i onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} className="fa fa-align-right mr-1 dark:text-slate-200 text-slate-900 lg:hidden text-2xl -mt-4 hover:text-teal-600"></i>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Organize;