import { useEffect, useState } from "react"

function VisMissField() {

  const [Vision, setVision] = useState(null)
  const [Mission, setMission] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.viss').value !== '' && document.querySelector('.mis').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Vision, Mission])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitVisMiss = async () => {
    setCommited(false)

    let mission;

    if (document.querySelector('.missions')) {
      let Mis = []
      document.querySelectorAll('.missions')
        .forEach(data => {
          if (data.value != '') {
            Mis.push(data.value)
          }
        })
      mission = Mis
    }

    return await fetch(`${nodeurl}/mission/add`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        vision: Vision,
        mission: mission
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

  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('textarea')
    const close = document.createElement('p')

    close.innerHTML = '&times;'
    close.className = 'absolute right-3 top-3 cursor-pointer hover:text-teal-800 text-teal-600 text-3xl'
    close.onclick = e => e.target.parentElement.remove()

    input.placeholder = `Type the ${a}...`
    input.className = `mt-2 bg-transparent dark:text-white py-2 pl-3 pr-9 w-[100%] rounded-xl text-lg  border outline-none border-teal-600 ${a.toLowerCase()}s`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a.toLowerCase()}`).append(div)
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#111111]">
      <h1 className="text-2xl pb-4 font-bold border-b">Change Vision & Mission</h1>
      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#111111] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <label htmlFor="vision" className="my-2 block font-bold text-lg text-teal-600">Vision :</label>
      <textarea required id="vision" onChange={(e) => setVision(e.target.value)} placeholder="Type the Vision..." className="viss bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />

      <div className="mission">
        <div className="flex justify-between text-xl items-end text-teal-600 font-bold my-3">
          <label htmlFor="mission" className="block">Missions :</label>
          <i onClick={() => addInput('Mission')} className="h-max text-lg -mb-1 cursor-pointer pr-2 fa fa-plus"></i>
        </div>
        <textarea required id="mission" onChange={(e) => setMission(e.target.value)} placeholder="Type the Mission..." className="mis missions bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
      </div>
      {
        (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Change Vision & Mission</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitVisMiss()}>Change Vision & Mission</p>
      }
    </div>
  );
}

export default VisMissField;