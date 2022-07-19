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

      }).catch(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#111111]">
      <h1 className="text-2xl pb-4 font-bold border-b dark:text-slate-200">Mailig PPI Sudan</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#111111] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl ">&times;</p>
          </div>
        }
        <input required type="text" onChange={(e) => setName(e.target.value)} placeholder="Your Name..." className="naming mt-4 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email..." className="mailing mt-2 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <textarea required onChange={(e) => setMsg(e.target.value)} placeholder="Your Message..." className="msg mt-8 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        {
          (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Send Mail</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitMail()}>Send Mail</p>
        }
      </div>
    </div>
  );
}

export default Mailing;