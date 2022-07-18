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

  useEffect(() => {

    if (document.querySelector('.tit').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Title])

  const submitBlogs = async () => {
    setCommited(false)

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('category', Category || document.querySelector('.cat').value)
    forms.append('author', Author || document.querySelector('.aut').value)
    forms.append('body', document.querySelector('#x').value)
    forms.append('date', Dates || document.querySelector('.dat').value)
    forms.append('poster', Poster)

    return await fetch(`${phpurl}/create_del.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
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
      <h3 className="text-teal-600">ADD POSTS</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Add post in PPI Sudan</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl ">&times;</p>
        </div>
      }
      <div>
        <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="titlepost" className="my-2 block font-bold text-lg text-teal-600">Title :</label>
            <input required type="text" onChange={(e) => setTitle(e.target.value)} id="titlepost" placeholder="Post Title..." className="tit bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Author :</label>
            <input required type="text" onChange={(e) => setAuthor(e.target.value)} id="authorpost" placeholder="Author Name..." defaultValue={name} className="aut bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
        </div>
        <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="postfile" className="my-2 block font-bold text-lg text-teal-600">Banner :</label>
            <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          </div>
          <div className="w-full">
            <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Category :</label>
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
          <label htmlFor="x" className="my-2 block font-bold text-lg text-teal-600">Body :</label>
          <input id="x" type="hidden" name="content" />
          <trix-editor input="x"></trix-editor>
        </div>
        <div className="flex justify-around items-center gap-8 md:flex-row flex-col mt-8">
          <input type="date" required defaultValue={`${y}-${(m.length < 2) ? '0' : ''}${m}-${(d.length < 2) ? '0' : ''}${d}`} onChange={(e) => setDates(e.target.value)} className="dat bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
          {
            (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Add Blog</p> : <p className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitBlogs()}>Add Blog</p>
          }
        </div>
      </div>
    </div>
  );
}

export default PostField;