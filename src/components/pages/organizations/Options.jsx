import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { delSecs, getSections } from "../../../Gets";

function Options() {

  const [Structures, setStructures] = useState(null)
  const [Institutes, setInstitutes] = useState(null)
  const [Autonomous, setAutonomous] = useState(null)
  const [Universities, setUniversities] = useState(null)
  const [Year, setYear] = useState(null)

  const nodeurl = import.meta.env.VITE_NODEURL

  useEffect(() => {
    fetch(`${nodeurl}/year/get`)
      .then(k => k.json()).then(a => setYear(a.data))

    getSections('Struktur').then(a => {
      setStructures(a.data)
    })

    getSections('Kekeluargaan').then(a => {
      setInstitutes(a.data)
    })

    getSections('Otonom').then(a => {
      setAutonomous(a.data)
    })

    getSections('Universitas').then(a => {
      setUniversities(a.data)
    })

  }, [])

  const structures = useRef()
  const autonomous = useRef()
  const institutes = useRef()
  const universities = useRef()
  const thesises = useRef()

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

  const thesis = () => {
    thesises.current.classList.toggle("-rotate-180");
    thesises.current.parentElement.nextElementSibling.classList.toggle("flex");
    thesises.current.parentElement.nextElementSibling.classList.toggle("hidden");
  }

  const titleChange = (e) => {
    document.querySelector('.title').innerHTML = e.target.parentElement.parentElement.previousElementSibling.firstChild.textContent
    document.querySelector('.sub').innerHTML = e.target.textContent
  }

  const titleChanges = (e) => {
    document.querySelector('.title').innerHTML = e.target.parentElement.previousElementSibling.firstChild.textContent
    document.querySelector('.sub').innerHTML = e.target.textContent
  }

  return (
    <>
      <div onClick={() => structure()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Struktur</h1>
        <i ref={structures} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        <Link onClick={(e) => { titleChanges(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 hover:bg-teal-600">Presiden</Link>
        <Link onClick={(e) => { titleChanges(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/vision" className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 hover:bg-teal-600">Visi & Misi</Link>
        {
          (Structures != null) && Structures.map(c => {
            return (
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} key={c.id} className="flex justify-between items-center gap-4">
                <Link onClick={(e) => titleChange(e)} to={`/organizations/section/${c.slug}`} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">{c.title}</Link>
                {
                  Cookies.get('admin') && Cookies.get('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c.id)}></i>
                  )
                }
              </p>
            )
          })
        }
      </div>

      <div onClick={() => autonomou()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Otonom</h1>
        <i ref={autonomous} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">

        {
          (Autonomous != null) && Autonomous.map(c => {
            return (
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} key={c.id} className="flex justify-between items-center gap-4">
                <Link onClick={(e) => titleChange(e)} to={`/organizations/section/${c.slug}`} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">{c.title}</Link>
                {
                  Cookies.get('admin') && Cookies.get('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c.id)}></i>
                  )
                }
              </p>
            )
          })
        }
      </div>

      <div onClick={() => institute()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Kekeluargaan</h1>
        <i ref={institutes} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          (Institutes != null) && Institutes.map(c => {
            return (
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} key={c.id} className="flex justify-between items-center gap-4">
                <Link onClick={(e) => titleChange(e)} to={`/organizations/section/${c.slug}`} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">{c.title}</Link>
                {
                  Cookies.get('admin') && Cookies.get('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c.id)}></i>
                  )
                }
              </p>
            )
          })
        }
      </div>

      <div onClick={() => universitie()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Universitas</h1>
        <i ref={universities} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        {
          (Universities != null) && Universities.map(c => {
            return (
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} key={c.id} className="flex justify-between items-center gap-4">
                <Link onClick={(e) => titleChange(e)} to={`/organizations/section/${c.slug}`} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">{c.title}</Link>
                {
                  Cookies.get('admin') && Cookies.get('id_admin') && (
                    <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delSecs(c.id)}></i>
                  )
                }
              </p>
            )
          })
        }
      </div>

      <div onClick={() => thesis()} className="p-4 cursor-pointer gap-4 border-t hover:bg-slate-50 dark:hover:bg-[#333333] flex justify-between items-center text-xl font-bold text-teal-600 ">
        <h1>Tesis</h1>
        <i ref={thesises} className="fa fa-angle-down"></i>
      </div>
      <div className="hidden flex-col p-4 gap-4 border-t">
        <Link onClick={(e) => { titleChange(e); document.querySelector('.side').classList.toggle('-translate-x-[100%]') }} to="/organizations/thesis" className="flex justify-between items-center gap-4">
          <p className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">Semua Pdf</p>
        </Link>
        {
          (Year != null) && Year.map(c => {
            return (
              <p onClick={() => document.querySelector('.side').classList.toggle('-translate-x-[100%]')} key={c._id} className="flex justify-between items-center gap-4">
                <Link onClick={(e) => titleChange(e)} to={`/organizations/thesis/y/${c.year}`} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-black dark:hover:bg-teal-600 w-full hover:bg-teal-600">{c.year}</Link>
              </p>
            )
          })
        }
      </div>
    </>
  );
}

export default Options;