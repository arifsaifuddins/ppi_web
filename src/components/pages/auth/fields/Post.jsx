import { useEffect, useState } from "react"

function PostField({ name, category }) {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Category, setCategory] = useState(null)
  const [Author, setAuthor] = useState(null)
  const [Dates, setDates] = useState(null)
  const [Poster, setPoster] = useState(null)

  const phpurl = import.meta.env.VITE_PHPURL
  const bBlog = document.querySelector('.bblog')


  useEffect(() => {

    if (document.querySelector('.tit').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const submitBlogs = async () => {
    setCommited(false)
    bBlog.innerHTML = 'Memuat...'

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('category', Category || document.querySelector('.cat').value)
    forms.append('author', Author || document.querySelector('.aut').value)
    forms.append('poster', Poster)
    forms.append('date', Dates || document.querySelector('.dat').value)
    forms.append('body', document.querySelector('#x').value)

    return await fetch(`${phpurl}/blogs.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
        bBlog.innerHTML = 'Tambah Postingan'
        window.location.assign('/blogs')
      }).catch(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
      })
  }

  const date = new Date()
  const y = date.getFullYear().toString()
  const m = (date.getMonth() + 1).toString()
  const d = date.getDate().toString()

  return (
    <div className="my-10 pb-10 border-b">
      <h3 className="text-teal-600">TAMBAH POST</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Tambah Postingan di PPI Sudan</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div>
        <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="titlepost" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
            <input required type="text" onChange={(e) => setTitle(e.target.value)} id="titlepost" placeholder="Judul Post..." className="tit bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Penulis :</label>
            <input required type="text" onChange={(e) => setAuthor(e.target.value)} id="authorpost" placeholder="Penulis..." defaultValue={name} className="aut bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
        </div>
        <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="postfile" className="my-2 block font-bold text-lg text-teal-600">Poster :</label>
            <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Kategori :</label>
            <select required type="text" id="authorpost" onChange={(e) => setCategory(e.target.value)} className="cat bg-transparent p-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
              {
                category != null && category.map(s => <option key={s._id} value={s.name}>{s.name}</option>)
              }
            </select>
          </div>
        </div>
        {
          (Poster != null) && <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" />
        }
        <div className="w-full mt-10">
          <label htmlFor="x" className="my-2 block font-bold text-lg text-teal-600">Konten :</label>
          <textarea id="x" name="content" className="hidden"></textarea>
          <trix-editor input="x"></trix-editor>
        </div>
        <div className="flex justify-around items-center gap-8 md:flex-row flex-col mt-8">
          <input type="date" required defaultValue={`${y}-${(m.length < 2) ? '0' : ''}${m}-${(d.length < 2) ? '0' : ''}${d}`} onChange={(e) => setDates(e.target.value)} className="dat bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          {
            (Commited == false) ? <p disabled type="submit" className="bblog cursor-not-allowed text-center bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Tambah Postingan</p> : <p className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitBlogs()}>Tambah Postingan</p>
          }
        </div>
      </div>
    </div>
  );
}

export default PostField;