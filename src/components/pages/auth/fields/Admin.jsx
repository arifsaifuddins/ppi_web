import { useEffect, useState } from "react"

function AdminField() {
  const [Name, setName] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Pass, setPass] = useState(null)
  const [Conf, setConf] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.mailed').value !== '' && document.querySelector('.passed').value !== '' && document.querySelector('.named').value !== '' && document.querySelector('.confed').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

    if (document.querySelector('.passed').value != document.querySelector('.confed').value) {
      setError('The confirm password must be match!')
      setCommited(false)
      setErrored(true)
    } else {
      setErrored(false)
    }

  }, [Email, Pass, Name, Conf])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitAdmin = async () => {
    setCommited(false)

    return await fetch(`${nodeurl}/admin/register`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Pass
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)

      }).catch(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
      <h1 className="text-2xl pb-4 font-bold border-b">Add an Admin</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl ">&times;</p>
        </div>
      }
      <input required type="text" placeholder="Admin Name..." onChange={(e) => setName(e.target.value)} className="named mt-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
      <input required type="email" placeholder="Admin Email..." onChange={(e) => setEmail(e.target.value)} className="mailed mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
      <input required type="password" placeholder="Admin Password..." onChange={(e) => setPass(e.target.value)} className="passed mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
      <input required type="password" placeholder="Confirm Admin Password..." onChange={(e) => setConf(e.target.value)} className="confed mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
      {
        (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Add Admin</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitAdmin()}>Add Admin</p>
      }
    </div>
  );
}

export default AdminField;