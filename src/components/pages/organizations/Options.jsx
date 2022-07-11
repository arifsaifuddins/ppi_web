import { Link } from "react-router-dom";

function Options() {
  const data = [1, 2, 3]

  const dropDown = (e) => {
    e.target.classList.toggle("-rotate-180");
    e.target.parentElement.nextElementSibling.classList.toggle("flex");
    e.target.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const titleChange = (e) => {
    document.querySelector('.title').innerHTML = e.target.parentElement.previousElementSibling.firstChild.textContent
    document.querySelector('.sub').innerHTML = e.target.textContent
  }

  return (
    <>
      <div className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Structures</h1>
        <i onClick={(e) => dropDown(e)} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        <Link onClick={(e) => titleChange(e)} to="/organizations" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border-teal-600 hover:border">Presidents</Link>
        <Link onClick={(e) => titleChange(e)} to="/organizations/vision" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border-teal-600 hover:border">Vision & Mission</Link>
        {
          data.map(o => {
            return (
              <Link onClick={(e) => titleChange(e)} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border-teal-600 hover:border">Kemenkes</Link>
            )
          })
        }
      </div>
      <div className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Autonomous</h1>
        <i onClick={(e) => dropDown(e)} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          data.map(o => {
            return (
              <Link onClick={(e) => titleChange(e)} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border-teal-600 hover:border">Vision & Mission</Link>
            )
          })
        }
      </div>
      <div className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Province Institutes</h1>
        <i onClick={(e) => dropDown(e)} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          data.map(o => {
            return (
              <Link onClick={(e) => titleChange(e)} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:border-teal-600 hover:border">Vision & Mission</Link>
            )
          })
        }
      </div>
    </>
  );
}

export default Options;