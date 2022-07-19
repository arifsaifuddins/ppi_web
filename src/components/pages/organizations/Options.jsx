import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { delSecs, getSections } from "../../../Gets";

function Options() {

  const [Structures, setStructures] = useState(null)
  const [Institutes, setInstitutes] = useState(null)
  const [Autonomous, setAutonomous] = useState(null)
  const [Universities, setUniversities] = useState(null)

  useEffect(() => {
    getSections('Structures').then(a => {
      setStructures(a.data)
    })

    getSections('Institutes').then(a => {
      setInstitutes(a.data)
    })

    getSections('Autonomous').then(a => {
      setAutonomous(a.data)
    })

    getSections('Universities').then(a => {
      setUniversities(a.data)
    })
  }, [])

  const structures = useRef()
  const autonomous = useRef()
  const institutes = useRef()
  const universities = useRef()

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

  const universitie = () => {
    universities.current.classList.toggle("-rotate-180");
    universities.current.parentElement.nextElementSibling.classList.toggle("flex");
    universities.current.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const titleChange = (e) => {
    document.querySelector('.title').innerHTML = e.target.parentElement.previousElementSibling.firstChild.textContent
    document.querySelector('.sub').innerHTML = e.target.textContent
  }

  return (
    <>
      <div onClick={() => structure()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Structures</h1>
        <i ref={structures} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 hover:bg-teal-600">Presidents</Link>
        <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/vision" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 hover:bg-teal-600">Vision & Mission</Link>
        {
          (Structures != null) && Structures.map(c => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to={`/organizations/section/${c._id}`} key={c._id} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 flex justify-between items-center hover:bg-teal-600">
                <p>{c.title}</p>
                {
                  localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c._id)}></i>
                  )
                }
              </Link>
            )
          })
        }
      </div>

      <div onClick={() => autonomou()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Autonomous</h1>
        <i ref={autonomous} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">

        {
          (Autonomous != null) && Autonomous.map(c => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to={`/organizations/section/${c._id}`} key={c._id} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 flex justify-between items-center hover:bg-teal-600">
                <p>{c.title}</p>
                {
                  localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c._id)}></i>
                  )
                }
              </Link>
            )
          })
        }
      </div>

      <div onClick={() => institute()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Institutes</h1>
        <i ref={institutes} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          (Institutes != null) && Institutes.map(c => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to={`/organizations/section/${c._id}`} key={c._id} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 flex justify-between items-center hover:bg-teal-600">
                <p>{c.title}</p>
                {
                  localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c._id)}></i>
                  )
                }
              </Link>
            )
          })
        }
      </div>

      <div onClick={() => universitie()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Universities</h1>
        <i ref={universities} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          (Universities != null) && Universities.map(c => {
            return (
              <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to={`/organizations/section/${c._id}`} key={c._id} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 flex justify-between items-center hover:bg-teal-600">
                <p>{c.title}</p>
                {
                  localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c._id)}></i>
                  )
                }
              </Link>
            )
          })
        }
      </div>
    </>
  );
}

export default Options;