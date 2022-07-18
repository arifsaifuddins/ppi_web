import { useEffect, useState } from "react"

function Login() {

  const [Email, setEmail] = useState(null)
  const [Pass, setPass] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.mail').value !== '' && document.querySelector('.pass').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

  }, [Email, Pass])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitAdmin = async () => {
    setCommited(false)

    return await fetch(`${nodeurl}/admin/login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: Email,
        password: Pass
      })
    })
      .then(r => r.json())
      .then(j => {
        if (j.data) {
          localStorage.removeItem('admin')
          localStorage.removeItem('id_admin')
          JSON.stringify(localStorage.setItem('admin', j.data.name))
          JSON.stringify(localStorage.setItem('id_admin', j.data._id))
          window.location.assign('/admin')
        } else {
          setError(j.message)
          setCommited(true)
          setErrored(true)
        }
      })
  }

  return (
    <div className="md:w-[90%] md:px-0 w-full px-4 lg:flex-row flex-col-reverse gap-10 mt-20 lg:mt-0 mx-auto flex justify-evenly items-center">
      <div className="p-4 bg-white my-32 shadow rounded-xl w-96 dark:bg-slate-800">
        <h1 className="text-2xl mb-4 pb-4 font-bold border-b">Login to PPI Sudan</h1>
        <div>
          {
            (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mb-4 rounded-xl text-slate-800 dark:text-slate-100 flex justify-between items-center">
              <div>{Error}</div>
              <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl ">&times;</p>
            </div>
          }
          <input required autoFocus type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email..." className="mail mt-2 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
          <input required type="password" onChange={(e) => setPass(e.target.value)} placeholder="Your Password..." className="pass mt-4 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
          {
            (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Login as Admin</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitAdmin()}>Login as Admin</p>
          }
        </div>
      </div>
      <img src="/assets/img/login.svg" alt="login" className="md:w-96 w-72" />
    </div>
  );
}

export default Login;