import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSection } from "../../../../Gets"
import Empty from "../../../layouts/Empty"
import Loader from "../../../Loader"
import parse from 'html-react-parser';

function OrgEdit() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Category, setCategory] = useState(null)
  const [Logo, setLogo] = useState(null)
  const [Poster, setPoster] = useState(null)
  const [Sections, setSections] = useState(null)

  useEffect(() => {

    if (Sections != null) {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const phpurl = import.meta.env.VITE_PHPURL

  const { slug } = useParams()
  const nav = useNavigate()

  useEffect(() => {
    getSection(slug).then(a => {
      setSections(a)
    })
  }, [slug])

  const submitSection = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let forms = new FormData()

    forms.append('title', Title || Sections.data[0].title)
    forms.append('category', Category || document.querySelector('.dua').value)
    forms.append('description', document.querySelector('#y').value)
    forms.append('poster', Poster)
    forms.append('logo', Logo)

    return await fetch(`${phpurl}/sections.php/?id=${Sections.data[0].id}`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        if (j.sts == 'gagal') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
        }

        if (j.sts == 'berhasil') {
          setError(j.msg)
          setCommited(true)
          setErrored(true)
          document.body.classList.remove('cursor-wait')
          document.body.classList.add('cursor-default')
          nav('/organizations')
        }
      }).catch(err => {
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
        setError('Terjadi error!, gambar salah/terlalu besar.')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="my-10">
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Edit Seksi di PPI Sudan</h1>
      {
        (Sections == null) ? (
          <Loader />
        ) : (
          <>
            {
              (Sections.data != null) ? (
                <div>
                  {
                    (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
                      <div>{Error}</div>
                      <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
                    </div>
                  }
                  <div className="flex justify-around md:gap-8 md:flex-row flex-col">
                    <div className="w-full">
                      <label htmlFor="titlesec" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
                      <input required type="text" id="titlesec" defaultValue={Sections.data[0].title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul Seksi..." className="satu bg-transparent rounded-xl py-2 pl-3 text-lg  border outline-none border-teal-600 w-[100%]" />
                      <label htmlFor="logo" className="my-2 block font-bold text-lg text-teal-600">Logo {'< 5MB'} :</label>
                      <input type="file" onChange={(e) => setLogo(e.target.files[0])} className=" bg-transparent py-2 pl-3 rounded-xl text-lg border outline-none border-teal-600 w-[100%]" />
                      {
                        (Logo != null) ? <img src={URL.createObjectURL(Logo)} alt="section" className="mt-4 w-full" /> : <img src={phpurl + '/files/' + Sections.data[0].section_logo} alt="logo" className="mt-4 w-full" />
                      }
                    </div>
                    <div className="w-full">
                      <label htmlFor="titlesec" className="my-2 block font-bold text-lg text-teal-600">Seksi :</label>
                      <select required type="text" id="authorpost" onChange={(e) => setCategory(e.target.value)} className="dua bg-transparent border-teal-600 border rounded-xl p-3 text-lg outline-none w-[100%]" >
                        <option value={Sections.data[0].category}>{Sections.data[0].category}</option>
                        <option value="Struktur">Struktur</option>
                        <option value="Otonom">Otonom</option>
                        <option value="Kekeluargaan">Kekeluargaan</option>
                        <option value="Universitas">Universitas</option>
                      </select>
                      <label htmlFor="logo" className="my-2 block font-bold text-lg text-teal-600">Poster {'< 5MB'} :</label>
                      <input required type="file" onChange={(e) => setPoster(e.target.files[0])} className=" bg-transparent py-2 pl-3 rounded-xl text-lg border outline-none border-teal-600 w-[100%]" />
                      {
                        (Poster != null) ? <img src={URL.createObjectURL(Poster)} alt="section" className="mt-4 w-full" /> : <img src={phpurl + '/files/' + Sections.data[0].section_poster} alt="logo" className="mt-4 w-full" />
                      }
                    </div>
                  </div>
                  <label className="mb-2 mt-8 block font-bold text-lg text-teal-600">Deskripsi :</label>
                  <textarea id="y" name="content" className="hidden" defaultValue={Sections.data[0].description}></textarea>
                  <trix-editor input="y">{parse(Sections.data[0].description)}</trix-editor>
                  {
                    (Commited == false) ? <p className="bsec cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Perbarui Seksi</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitSection()}>Perbarui Seksi</p>
                  }
                </div>
              ) : (
                <Empty empty={Sections.msg} />
              )
            }
          </>
        )
      }
    </div>
  );
}

export default OrgEdit;