import { useEffect, useState } from "react";

function PresidentField() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)

  const [posterPres, setPosterPres] = useState(null)
  const [Name, setName] = useState(null)
  const [Institute, setInstitute] = useState(null)
  const [Univ, setUniv] = useState(null)
  const [Major, setMajor] = useState(null)
  const [Quotes, setQuotes] = useState(null)

  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.filepres').value !== ''
      && document.querySelector('.namep').value !== ''
      && document.querySelector('.instp').value !== ''
      && document.querySelector('.univp').value !== ''
      && document.querySelector('.majorp').value !== ''
      && document.querySelector('.quotesp').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Name, posterPres, Major, Univ, Institute, Quotes])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitPresident = async () => {
    setCommited(false)

    let forms = new FormData()

    forms.append('name', Name)
    forms.append('institute', Institute)
    forms.append('university', Univ)
    forms.append('major', Major)
    forms.append('quotes', Quotes)
    forms.append('president_poster', posterPres)

    return await fetch(`${nodeurl}/president/add`, {
      method: 'PUT',
      body: forms
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

  const [postercoPres, setPostercoPres] = useState(null)
  const [coName, setcoName] = useState(null)
  const [coInstitute, setcoInstitute] = useState(null)
  const [coUniv, setcoUniv] = useState(null)
  const [coMajor, setcoMajor] = useState(null)
  const [coQuotes, setcoQuotes] = useState(null)

  const [coCommited, setcoCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.cofilepres').value !== ''
      && document.querySelector('.conamep').value !== ''
      && document.querySelector('.coinstp').value !== ''
      && document.querySelector('.counivp').value !== ''
      && document.querySelector('.comajorp').value !== ''
      && document.querySelector('.coquotesp').value !== '') {
      setcoCommited(true)
    } else {
      setcoCommited(false)
    }
  }, [coName, postercoPres, coMajor, coUniv, coInstitute, coQuotes])


  const submitcoPresident = async () => {
    setcoCommited(false)

    let forms = new FormData()

    forms.append('name', coName)
    forms.append('institute', coInstitute)
    forms.append('university', coUniv)
    forms.append('major', coMajor)
    forms.append('quotes', coQuotes)
    forms.append('president_poster', postercoPres)

    return await fetch(`${nodeurl}/copresident/add`, {
      method: 'PUT',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setcoCommited(true)
        setErrored(true)
        window.location.assign('/admin')
      }).catch(j => {
        setError(j.message)
        setcoCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="my-10 pb-10 border-b">
      <h3 className="text-teal-600">PRESIDENTS</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Change President</h1>

      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-slate-800 dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl ">&times;</p>
        </div>
      }
      <div className="flex justify-around items-center gap-8 md:flex-row flex-col">
        <div>
          <label className="block font-bold text-lg text-teal-600">President :</label>
          <div className="w-full">
            <input required type="file" className="filepres bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" onChange={(e) => setPosterPres(e.target.files[0])} />
            {
              (posterPres != null) && <img src={URL.createObjectURL(posterPres)} alt="president" className="mb-4 w-full" />
            }
            <div className="border border-teal-600 rounded-xl">
              <input required type="text" placeholder="President Name..." onChange={(e) => setName(e.target.value)} className="namep bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Institute..." onChange={(e) => setInstitute(e.target.value)} className="instp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="University..." onChange={(e) => setUniv(e.target.value)} className="univp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Major of College..." onChange={(e) => setMajor(e.target.value)} className="majorp bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
            </div>
            <textarea required placeholder="Quotes..." onChange={(e) => setQuotes(e.target.value)} className="quotesp mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
            {
              (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Change President</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitPresident()}>Change President</p>
            }
          </div>
        </div>

        <div>
          <label className="block font-bold text-lg text-teal-600">Co President :</label>
          <div className="w-full">
            <input required type="file" className="cofilepres bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" onChange={(e) => setPostercoPres(e.target.files[0])} />
            {
              (postercoPres != null) && <img src={URL.createObjectURL(postercoPres)} alt="president" className="mb-4 w-full" />
            }
            <div className="border border-teal-600 rounded-xl">
              <input required type="text" placeholder="President Name..." onChange={(e) => setcoName(e.target.value)} className="conamep bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Institute..." onChange={(e) => setcoInstitute(e.target.value)} className="coinstp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="University..." onChange={(e) => setcoUniv(e.target.value)} className="counivp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Major of College..." onChange={(e) => setcoMajor(e.target.value)} className="comajorp bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
            </div>
            <textarea required placeholder="Quotes..." onChange={(e) => setcoQuotes(e.target.value)} className="coquotesp mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
            {
              (coCommited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Change President</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitcoPresident()}>Change President</p>
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default PresidentField;