import { useEffect, useState } from "react"

function FAQsField() {

  const [Question, setQuestion] = useState(null)
  const [Answer, setAnswer] = useState(null)

  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.que').value !== '' && document.querySelector('.ans').value !== '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Answer, Question])

  const nodeurl = import.meta.env.VITE_NODEURL

  const submitFAQs = async () => {
    setCommited(false)

    return await fetch(`${nodeurl}/faqs/add`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        question: Question,
        answer: Answer
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
        window.location.assign('/faqs')
      }).catch(j => {
        setError(j.message)
        setCommited(true)
        setErrored(true)
      })
  }

  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#222222]">
      <h1 className="text-2xl pb-4 font-bold border-b">Tambah Satu FAQs</h1>
      <div>
        {
          (Errored == true) && <div className="text-sm w-[100%] bg-transparent border py-1 px-2 mt-4 rounded-xl text-[#222222] dark:text-slate-100 flex justify-between items-center">
            <div>{Error}</div>
            <p onClick={() => setErrored(false)} className="text-teal-600 hover:text-teal-700 text-2xl cursor-pointer">&times;</p>
          </div>
        }
        <input required type="text" name="question" onChange={(e) => setQuestion(e.target.value)} placeholder="Ketik Pertanyaan..." className="que my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
        <textarea required name="answer" onChange={(e) => setAnswer(e.target.value)} onKeyUp={(e) => e.which === 13 && submitFAQs()} placeholder="Ketik Jawaban..." className="ans bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        {
          (Commited == false) ? <p className="bfaqs cursor-not-allowed text-center mt-4 bg-teal-800 text-slate-400 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Tambah FAQs</p> : <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]" onClick={() => submitAdmin()}>Tambah FAQs</p>
        }
      </div>
    </div>
  );
}

export default FAQsField;