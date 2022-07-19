import { useEffect, useState } from "react"

function CategoryField() {
  const [Category, setCategory] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.cate').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Category])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitCategory = async () => {
    setCommited(false)

    return await fetch(`${nodeurl}/category/add`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: Category
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        window.location.assign('/admin')
      }).catch(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#111111]">
      <h1 className="text-2xl pb-4 font-bold border-b">Add Post Category</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#111111] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <input required type="text" onChange={(e) => setCategory(e.target.value)} onKeyUp={(e) => e.which === 13 && submitCategory()} name="category" placeholder="Type the Category..." className="cate my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        {
          (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Add Post Category</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitCategory()}>Add Post Category</p>
        }
      </div>
    </div>
  );
}

export default CategoryField;