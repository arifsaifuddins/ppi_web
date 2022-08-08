import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getBlog } from "../../../../Gets"
import Empty from "../../../layouts/Empty"
import Loader from "../../../Loader"
import parse from 'html-react-parser';

function PsEdit({ category }) {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const [Title, setTitle] = useState(null)
  const [Category, setCategory] = useState(null)
  const [Author, setAuthor] = useState(null)
  const [Poster, setPoster] = useState(null)

  const { slug } = useParams()
  const [Blogs, setBlogs] = useState(null)
  const nav = useNavigate()

  const phpurl = import.meta.env.VITE_PHPURL

  useEffect(() => {
    if (Blogs != null) {
      setCommited(true)
    } else {
      setCommited(false)
    }

  }, [Blogs])

  useEffect(() => {
    getBlog(slug).then(a => setBlogs(a))
  }, [slug])

  const updateBlogs = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    let forms = new FormData()

    forms.append('title', Title || Blogs.data[0].title)
    forms.append('slug', Blogs.data[0].slug)
    forms.append('viewer', Blogs.data[0].viewer)
    forms.append('category', Category || document.querySelector('.cat').value)
    forms.append('author', Author || document.querySelector('.aut').value)
    forms.append('poster', Poster)
    forms.append('date', Blogs.data[0].date)
    forms.append('body', document.querySelector('#x').value)

    return await fetch(`${phpurl}/blogs.php/?id=${Blogs.data[0].id}`, {
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
          nav('/blogs')
        }
      }).catch(j => {
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
        setError('Terjadi error!, gambar salah/terlalu besar.')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="my-10">
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Edit Artikel PPI Sudan</h1>
      {
        (Blogs == null) ? (
          <Loader />
        ) : (
          <>
            {
              (Blogs.data != null) ? (
                <div>
                  {
                    (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
                      <div>{Error}</div>
                      <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
                    </div>
                  }
                  <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
                    <div className="w-full">
                      <label htmlFor="titlepost" className="my-2 block font-bold text-lg text-teal-600">Judul :</label>
                      <input required type="text" defaultValue={Blogs.data[0].title} onChange={(e) => setTitle(e.target.value)} id="titlepost" placeholder="Judul Post..." className="tit bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Penulis :</label>
                      <input required type="text" defaultValue={Blogs.data[0].author} onChange={(e) => setAuthor(e.target.value)} id="authorpost" placeholder="Penulis..." className="aut bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                    </div>
                  </div>
                  <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
                    <div className="w-full">
                      <label htmlFor="postfile" className="my-2 block font-bold text-lg text-teal-600">Poster {'< 5MB'} :</label>
                      <input required onChange={(e) => setPoster(e.target.files[0])} type="file" id="postfile" className="pos bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Kategori :</label>
                      <select required type="text" id="authorpost" onChange={(e) => setCategory(e.target.value)} className="cat bg-transparent p-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
                        <option value={Blogs.data[0].category}>{Blogs.data[0].category}</option>
                        {
                          category != null && category.map(s => <option key={s._id} value={s.name}>{s.name}</option>)
                        }
                      </select>
                    </div>
                  </div>
                  {
                    (Poster != null) ? <img src={URL.createObjectURL(Poster)} alt="blog" className="mt-4 w-full" /> : <img src={phpurl + '/files/' + Blogs.data[0].blog_poster} alt="blogs" className="mt-4 w-full" />
                  }
                  <div className="w-full mt-10">
                    <label htmlFor="x" className="my-2 block font-bold text-lg text-teal-600">Konten :</label>
                    <textarea id="x" name="content" defaultValue={Blogs.data[0].body} className="hidden"></textarea>
                    <trix-editor input="x">{parse(Blogs.data[0].body)}</trix-editor>
                  </div>
                  <div className="flex justify-around items-center gap-8 md:flex-row flex-col mt-8">
                    {
                      (Commited == false) ? <p className="bblog cursor-not-allowed text-center bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Perbarui Artikel</p> : <p className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => updateBlogs()}>Perbarui Artikel</p>
                    }
                  </div>
                </div>
              ) : (
                <Empty empty={Blogs.msg} />
              )
            }
          </>
        )
      }
    </div>
  );
}

export default PsEdit;