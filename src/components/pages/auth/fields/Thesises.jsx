import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function ThesisesField() {

  const [Title, setTitle] = useState(null)
  const [Program, setProgram] = useState(null)
  const [Author, setAuthor] = useState(null)
  const [Faculty, setFaculty] = useState(null)
  const [Campus, setCampus] = useState(null)
  const [Pdf, setPdf] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const phpurl = import.meta.env.VITE_PHPURL

  useEffect(() => {

    if (document.querySelector('.ti').value !== '' && document.querySelector('.pr').value !== '' && document.querySelector('.ca').value !== '' && document.querySelector('.fak').value !== '' && document.querySelector('.au').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Program, Title, Author, Faculty, Campus])

  const nav = useNavigate()

  function submitThesis() {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let forms = new FormData()

    forms.append('title', Title)
    forms.append('author', Author || document.querySelector('.au').value)
    forms.append('year', new Date().getFullYear())
    forms.append('program', Program)
    forms.append('faculty', Faculty)
    forms.append('campus', Campus)
    forms.append('pdf', Pdf)

    let ajax = new XMLHttpRequest()
    ajax.upload.addEventListener("progress", progressHandler, false)
    ajax.addEventListener("load", completeHandler, false)
    ajax.addEventListener("error", errorHandler, false)
    ajax.addEventListener("abort", abortHandler, false)
    ajax.open("POST", `${phpurl}/pdfs.php`)
    ajax.send(forms)
  }

  function progressHandler(event) {
    const percent = (event.loaded / event.total) * 100
    document.getElementById("progressBar").value = Math.round(percent)
    document.getElementById("progress").innerHTML = Math.round(percent) + "%"
  }

  function completeHandler(event) {

    document.getElementById("progressBar").value = 0
    document.getElementById("progress").innerHTML = '0%'
    const res = JSON.parse(event.target.responseText)
    setError(res.msg)
    setCommited(true)
    setErrored(true)
    nav('/organizations/thesis')
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
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#222222]">
      <h1 className="text-2xl pb-4 font-bold border-b">Tambah Satu Tesis</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <label htmlFor="judul" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
        <input required id="judul" type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Judul..." className="ti bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        <label htmlFor="penulis" className="my-2 block font-bold text-lg text-teal-600">Penulis :</label>
        <input required id="penulis" type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Penulis..." className="au bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        <label htmlFor="pro" className="my-2 block font-bold text-lg text-teal-600">Jenjang :</label>
        <select required id="pro" type="text" name="program" onChange={(e) => setProgram(e.target.value)} placeholder="Program..." className="pr bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>
        <label htmlFor="fak" className="my-2 block font-bold text-lg text-teal-600">Fakultas :</label>
        <select required id="fak" type="text" name="fakulta" onChange={(e) => setFaculty(e.target.value)} placeholder="Fakultas..." className="fak bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
          <option value="Dirasat Islam">Dirasat Islam</option>
          <option value="Syaria dan Hukum">Syaria dan Hukum</option>
          <option value="Al-Quran Al-Karim">Al-Quran Al-Karim</option>
          <option value="Hadits dan Ilmu Sunah">Hadits dan Ilmu Sunah</option>
          <option value="Sejarah dan Dakwah">Sejarah dan Dakwah</option>
          <option value="Akidah Islam">Akidah Islam</option>
          <option value="Bahasa Arab">Bahasa Arab</option>
          <option value="Usul Ad-Din">Usul Ad-Din</option>
          <option value="Sastra">Sastra</option>
          <option value="Tarbiyah">Tarbiyah</option>
          <option value="Linguistik">Linguistik</option>
        </select>
        <label htmlFor="cam" className="my-2 block font-bold text-lg text-teal-600">Universitas :</label>
        <select required id="cam" type="text" name="campus" onChange={(e) => setCampus(e.target.value)} placeholder="Universitas..." className="ca bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
          <option value="International University of Africa">International University of Africa</option>
          <option value="Khartoum International Institute for Arabic Language">Khartoum International Institute for Arabic Language</option>
          <option value="University of The Holy Quran and Islamic Sciences">University of The Holy Quran and Islamic Sciences</option>
          <option value="Omdurman Islamic University">Omdurman Islamic University</option>
          <option value="Universitas of Gazera">Universitas of Gazera</option>
          <option value="University of The Holy Quran and Taseel of Sciences">University of The Holy Quran and Taseel of Sciences</option>
          <option value="Institute Zaim Azhari">Institute Zaim Azhari</option>
          <option value="Gabra Academic Collage">Gabra Academic Collage</option>
          <option value="University of Delta">University of Delta</option>
          <option value="An-Nubuwwa University">An-Nubuwwa University</option>
        </select>
        <label htmlFor="Pdf" className="my-2 block font-bold text-lg text-teal-600">PDF :</label>
        <input required id="Pdf" type="file" name="pdf" onChange={(e) => setPdf(e.target.files[0])} className="mb-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        <div className="flex gap-2 items-center justify-between ml-2">
          <label id="progress">0%</label>
          <progress id="progressBar" value="0" max="100" className="w-full bg-teal-600 mx-2 rounded-lg overflow-hidden"></progress>
        </div>
        {
          (Commited == false) ? <p className="bthesis cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Tambah Tesis</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitThesis()}>Tambah Tesis</p>
        }
      </div>
    </div>
  )
}

export default ThesisesField