import { useRef } from "react";
import { Link } from "react-router-dom";

function Options() {
  const data = [1, 2, 3]

  const structures = useRef()
  const autonomous = useRef()
  const institutes = useRef()

  const structure = () => {
    structures.current.classList.toggle("-rotate-180");
    structures.current.parentElement.nextElementSibling.classList.toggle("flex");
    structures.current.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const autonomou = () => {
    autonomous.current.classList.toggle("-rotate-180");
    autonomous.current.parentElement.nextElementSibling.classList.toggle("flex");
    autonomous.current.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const institute = () => {
    institutes.current.classList.toggle("-rotate-180");
    institutes.current.parentElement.nextElementSibling.classList.toggle("flex");
    institutes.current.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const titleChange = (e) => {
    document.querySelector('.title').innerHTML = e.target.parentElement.previousElementSibling.firstChild.textContent
    document.querySelector('.sub').innerHTML = e.target.textContent
  }

  return (
    <>
      <div onClick={() => structure()} className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Structures</h1>
        <i ref={structures} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-teal-600 hover:bg-teal-600">Presidents</Link>
        <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/vision" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-teal-600 hover:bg-teal-600">Vision & Mission</Link>
        {
          data.map(o => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-teal-600 hover:bg-teal-600">Kemenkes</Link>
            )
          })
        }
      </div>

      <div onClick={() => autonomou()} className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Autonomous</h1>
        <i ref={autonomous} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          data.map(o => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-teal-600 hover:bg-teal-600">Vision & Mission</Link>
            )
          })
        }
      </div>

      <div onClick={() => institute()} className="p-4 gap-4 border-t hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Institutes</h1>
        <i ref={institutes} className="fa fa-angle-down cursor-pointer"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          data.map(o => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/section/kemenkes" data={o} key={o} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 dark:hover:bg-teal-600 hover:bg-teal-600">Vision & Mission</Link>
            )
          })
        }
      </div>
    </>
  );
}

export default Options;