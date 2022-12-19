import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function BasesField() {

  const [Title, setTitle] = useState(null)
  const [Thumb, setThumb] = useState(null)
  const [Pdf, setPdf] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.titt').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const phpurl = import.meta.env.VITE_PHPURL
  const nav = useNavigate()

  function submitBases() {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let forms = new FormData()

    forms.append('title', Title)
    forms.append('thumb', Thumb)
    forms.append('pdf', Pdf)

    let ajax = new XMLHttpRequest()
    ajax.upload.addEventListener("progress2", progressHandler, false)
    ajax.addEventListener("load", completeHandler, false)
    ajax.addEventListener("error", errorHandler, false)
    ajax.addEventListener("abort", abortHandler, false)
    ajax.open("POST", `${phpurl}/bases.php`)
    ajax.send(forms)
  }

  function progressHandler(event) {
    const percent = (event.loaded / event.total) * 100
    document.getElementById("progressBar2").value = Math.round(percent)
    document.getElementById("progress2").innerHTML = Math.round(percent) + "%"
  }

  function completeHandler(event) {

    document.getElementById("progressBar2").value = 0
    document.getElementById("progress2").innerHTML = '0%'
    const res = JSON.parse(event.target.responseText)
    setError(res.msg)
    setCommited(true)
    setErrored(true)
    nav('/organizations/bases')
    document.body.classList.add('cursor-default')
    document.body.classList.remove('cursor-wait')
  }

  function errorHandler() {
    setError("Upload Failed")
    setCommited(true)
    setErrored(true)
    document.body.classList.add('cursor-default')
    document.body.classList.remove('cursor-wait')
  }

  function abortHandler() {
    setError("Upload Aborted")
    setCommited(true)
    setErrored(true)
    document.body.classList.add('cursor-default')
    document.body.classList.remove('cursor-wait')
  }

  return (
    <div className=" bg-white dark:bg-[rgb(34,34,34)] mb-10 mt-10">
      <h3 className="text-teal-600">TAMBAH LANDASAN</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Tambah Satu Landasan</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <label htmlFor="judul" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
        <input required id="judul" type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Judul..." className="titt bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="w-full">
            <label htmlFor="thumb" className="my-2 block font-bold text-lg text-teal-600">Thumbnail :</label>
            <input required id="thumb" type="file" name="author" onChange={(e) => setThumb(e.target.files[0])} className=" bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="Pdf" className="my-2 block font-bold text-lg text-teal-600">PDF :</label>
            <input required id="Pdf" type="file" name="pdf" onChange={(e) => setPdf(e.target.files[0])} className="mb-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between ml-2">
          <label id="progress2">0%</label>
          <progress id="progressBar2" value="0" max="100" className="w-full bg-teal-600 ml-2 rounded-lg overflow-hidden"></progress>
        </div>
        {
          (Commited == false) ? <p className="bthesis cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Tambah Landasan</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitBases()}>Tambah Landasan</p>
        }
      </div>
    </div>
  )
}

export default BasesField