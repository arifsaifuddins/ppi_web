import { useEffect, useState } from "react";

function PresidentField() {

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)

  const [posterPres, setPosterPres] = useState(null)
  const [Name, setName] = useState(null)
  const [Birth, setBirth] = useState(null)
  const [Institute, setInstitute] = useState(null)
  const [Univ, setUniv] = useState(null)
  const [Major, setMajor] = useState(null)
  const [Quotes, setQuotes] = useState(null)

  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.filepres').value !== ''
      && document.querySelector('.namep').value !== ''
      && document.querySelector('.birthp').value !== ''
      && document.querySelector('.instp').value !== ''
      && document.querySelector('.univp').value !== ''
      && document.querySelector('.majorp').value !== ''
      && document.querySelector('.quotesp').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Name, posterPres, Major, Univ, Institute, Quotes])

  const phpurl = import.meta.env.VITE_PHPURL

  const submitPresident = async () => {
    setCommited(false)

    let forms = new FormData()

    forms.append('name', Name)
    forms.append('birth', Birth)
    forms.append('institute', Institute)
    forms.append('is_president', 'president')
    forms.append('university', Univ)
    forms.append('major', Major)
    forms.append('quotes', Quotes)
    forms.append('poster', posterPres)

    return await fetch(`${phpurl}/presidents.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
        window.location.assign('/organizations')
      }).catch(j => {
        setError(j.msg)
        setCommited(true)
        setErrored(true)
      })
  }

  const [postercoPres, setPostercoPres] = useState(null)
  const [coName, setcoName] = useState(null)
  const [coBirth, setcoBirth] = useState(null)
  const [coInstitute, setcoInstitute] = useState(null)
  const [coUniv, setcoUniv] = useState(null)
  const [coMajor, setcoMajor] = useState(null)
  const [coQuotes, setcoQuotes] = useState(null)

  const [coCommited, setcoCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.cofilepres').value !== ''
      && document.querySelector('.conamep').value !== ''
      && document.querySelector('.cobirthp').value !== ''
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
    forms.append('birth', coBirth)
    forms.append('institute', coInstitute)
    forms.append('is_president', 'copresident')
    forms.append('university', coUniv)
    forms.append('major', coMajor)
    forms.append('quotes', coQuotes)
    forms.append('poster', postercoPres)

    return await fetch(`${phpurl}/presidents.php`, {
      method: 'POST',
      body: forms
    })
      .then(r => r.json())
      .then(j => {
        setError(j.msg)
        setcoCommited(true)
        setErrored(true)
        window.location.assign('/organizations')
      }).catch(j => {
        setError(j.msg)
        setcoCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="my-10 pb-10 border-b">
      <h3 className="text-teal-600">PRESIDEN</h3>
      <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Ubah Presiden</h1>

      {
        (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 my-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
          <div>{Error}</div>
          <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
        </div>
      }
      <div className="flex justify-around items-center gap-8 md:flex-row flex-col">
        <div>
          <label className="block font-bold text-lg text-teal-600">Presiden :</label>
          <div className="w-full">
            <input required type="file" className="filepres bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" onChange={(e) => setPosterPres(e.target.files[0])} />
            {
              (posterPres != null) && <img src={URL.createObjectURL(posterPres)} alt="president" className="mb-4 w-full" />
            }
            <div className="border border-teal-600 rounded-xl">
              <input required type="text" placeholder="Nama..." onChange={(e) => setName(e.target.value)} className="namep bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Tanggal Lahir..." onChange={(e) => setBirth(e.target.value)} className="birthp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Kekeluargaan..." onChange={(e) => setInstitute(e.target.value)} className="instp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Universitas..." onChange={(e) => setUniv(e.target.value)} className="univp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Jurusan..." onChange={(e) => setMajor(e.target.value)} className="majorp bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
            </div>
            <textarea required placeholder="Quote..." onChange={(e) => setQuotes(e.target.value)} onKeyUp={(e) => e.which === 13 && submitPresident()} className="quotesp mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
            {
              (Commited == false) ? <p className="bpres cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Ubah Presiden</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitPresident()} >Ubah Presiden</p>
            }
          </div>
        </div>

        <div>
          <label className="block font-bold text-lg text-teal-600">Wakil Presiden :</label>
          <div className="w-full">
            <input required type="file" className="cofilepres bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" onChange={(e) => setPostercoPres(e.target.files[0])} />
            {
              (postercoPres != null) && <img src={URL.createObjectURL(postercoPres)} alt="president" className="mb-4 w-full" />
            }
            <div className="border border-teal-600 rounded-xl">
              <input required type="text" placeholder="Nama..." onChange={(e) => setcoName(e.target.value)} className="conamep bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Tanggal Lahir..." onChange={(e) => setcoBirth(e.target.value)} className="cobirthp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Kekeluargaan..." onChange={(e) => setcoInstitute(e.target.value)} className="coinstp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Universitas..." onChange={(e) => setcoUniv(e.target.value)} className="counivp bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
              <input required type="text" placeholder="Jurusan..." onChange={(e) => setcoMajor(e.target.value)} className="comajorp bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
            </div>
            <textarea required placeholder="Quote..." onChange={(e) => setcoQuotes(e.target.value)} onKeyUp={(e) => e.which === 13 && submitcoPresident()} className="coquotesp mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
            {
              (coCommited == false) ? <p className="bcopres cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Ubah Wakil Presiden</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitcoPresident()} >Ubah Wakil Presiden</p>
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default PresidentField;