import { useEffect, useState } from "react"

function ThesisesField() {

  const [Title, setTitle] = useState(null)
  const [Year, setYear] = useState(null)
  const [Author, setAuthor] = useState(null)
  const [Pdf, setPdf] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.ti').value !== '' && document.querySelector('.ye').value !== '' && document.querySelector('.au').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Year, Title, Author])

  const phpurl = import.meta.env.VITE_PHPURL
  const nodeurl = import.meta.env.VITE_NODEURL

  function submitThesis() {
    setCommited(false)

    let forms = new FormData()

    forms.append('title', Title)
    forms.append('author', Author || document.querySelector('.au').value)
    forms.append('year', Year || document.querySelector('.ye').value)
    forms.append('pdf', Pdf)

    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", `${phpurl}/create_delpdf.php`);
    ajax.send(forms);
  }

  function progressHandler(event) {
    const percent = (event.loaded / event.total) * 100;
    document.getElementById("progressBar").value = Math.round(percent);
    document.getElementById("progress").innerHTML = Math.round(percent) + "%";
  }

  async function completeHandler(event) {

    document.getElementById("progressBar").value = 0;
    document.getElementById("progress").innerHTML = '0%';

    await fetch(`${nodeurl}/year/add`, {
      method: 'POST',
      body: {
        yeartime: Year || document.querySelector('.ye').value
      }
    }).then(a => {
      const res = JSON.parse(event.target.responseText)
      setError(res.msg)
      setCommited(true)
      setErrored(true)
    })
  }

  function errorHandler() {
    setError("Upload Failed")
    setCommited(true)
    setErrored(true)
  }

  function abortHandler() {
    setError("Upload Aborted")
    setCommited(true)
    setErrored(true)
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#222222]">
      <h1 className="text-2xl pb-4 font-bold border-b">Add a Thesis</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <input required type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Type the title..." className="ti mt-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        <input required type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Type the author..." className="ye my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        <input required name="year" type="number" defaultValue={new Date().getFullYear()} onChange={(e) => setYear(e.target.value)} onKeyUp={(e) => e.which === 13 && submitThesis()} placeholder="Type the year..." className="au bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        <input required type="file" name="pdf" onChange={(e) => setPdf(e.target.files[0])} placeholder="Type the title..." className="my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        <div className="flex gap-2 items-center justify-between ml-2">
          <label id="progress">0%</label>
          <progress id="progressBar" value="0" max="100" className="w-full bg-teal-600 mx-2 rounded-lg"></progress>
        </div>
        {
          (Commited == false) ? <p disabled type="submit" className="cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Add Thesises</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitThesis()}>Add Thesises</p>
        }
      </div>
    </div>
  );
}

export default ThesisesField;