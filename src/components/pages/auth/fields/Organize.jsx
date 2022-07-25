import { useEffect, useState } from "react"

function OrganizeField() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Category, setCategory] = useState(null)
  const [Logo, setLogo] = useState(null)
  const [Poster, setPoster] = useState(null)

  useEffect(() => {

    if (document.querySelector('.satu').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const phpurl = import.meta.env.VITE_PHPURL
  const bSec = document.querySelector('.bsec')


  const submitSection = async () => {
    setCommited(false)
    bSec.innerHTML = 'Memuat...'

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('category', Category || document.querySelector('.dua').value)
    forms.append('description', document.querySelector('#y').value)
    forms.append('poster', Poster)
    forms.append('logo', Logo)

    return await fetch(`${phpurl}/sections.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
        bSec.innerHTML = 'Tambah Seksi'
        window.location.assign('/organizations')
      }).catch(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="my-10 pb-10 border-b">
      <h3 className="text-teal-600">TAMBAH SEKSI</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Tambah Seksi di PPI Sudan</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div>
        <div className="flex justify-around md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="titlesec" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
            <input required type="text" id="titlesec" onChange={(e) => setTitle(e.target.value)} placeholder="Judul Seksi..." className="satu bg-transparent rounded-xl py-2 pl-3 text-lg  border outline-none border-teal-600 w-[100%]" />
            <label htmlFor="titlesec" className="my-2 block font-bold text-lg text-teal-600">Seksi :</label>
            <select required type="text" id="authorpost" onChange={(e) => setCategory(e.target.value)} className="dua bg-transparent border-teal-600 border rounded-xl p-3 text-lg outline-none w-[100%]" >
              <option value="Struktur">Struktur</option>
              <option value="Otonom">Otonom</option>
              <option value="Kekeluargaan">Kekeluargaan</option>
              <option value="Universitas">Universitas</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="logo" className="my-2 block font-bold text-lg text-teal-600">Logo :</label>
            <input type="file" onChange={(e) => setLogo(e.target.files[0])} className=" bg-transparent py-2 pl-3 rounded-xl text-lg border outline-none border-teal-600 w-[100%]" />
            <label htmlFor="logo" className="my-2 block font-bold text-lg text-teal-600">Poster :</label>
            <input required type="file" onChange={(e) => setPoster(e.target.files[0])} className=" bg-transparent py-2 pl-3 rounded-xl text-lg border outline-none border-teal-600 w-[100%]" />
          </div>
        </div>
        <label className="mb-2 mt-8 block font-bold text-lg text-teal-600">Deskripsi :</label>
        <textarea id="y" name="content" className="hidden"></textarea>
        <trix-editor input="y"></trix-editor>
        {
          (Commited == false) ? <p disabled type="submit" className="bsec cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Tambah Seksi</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitSection()}>Tambah Seksi</p>
        }
      </div>
    </div>
  );
}

export default OrganizeField;