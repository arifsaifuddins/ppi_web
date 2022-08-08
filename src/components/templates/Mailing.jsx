import { useEffect, useState } from "react"

function Mailing() {

  const [Name, setName] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Msg, setMsg] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {
    if (document.querySelector('.naming').value !== '' && document.querySelector('.mailing').value !== '' && document.querySelector('.msg').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Name, Email, Msg])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitMail = async () => {
    setCommited(false)
    document.body.classList.add('cursor-wait')
    document.body.classList.remove('cursor-default')
    return await fetch(`${nodeurl}/mail`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: Name,
        email: Email,
        message: Msg
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        document.body.classList.add('cursor-default')
        document.body.classList.remove('cursor-wait')
      }).catch(j => {
        setError(j.message)
        document.body.classList.remove('cursor-wait')
        document.body.classList.add('cursor-default')
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#222222]">
      <h1 className="text-2xl pb-4 font-bold border-b dark:text-slate-200">Kirim Mail PPI Sudan</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <input required type="text" onChange={(e) => setName(e.target.value)} placeholder="Nama..." className="naming mt-4 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." className="mailing mt-2 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <textarea required onChange={(e) => setMsg(e.target.value)} placeholder="Pesan..." className="msg mt-8 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        {
          (Commited == false) ? <p className="bmail cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Kirim Mail</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitMail()}>Kirim Mail</p>
        }
      </div>
    </div>
  );
}

export default Mailing;