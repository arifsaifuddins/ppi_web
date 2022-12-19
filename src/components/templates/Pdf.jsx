import Cookies from "js-cookie"
import { Link } from 'react-router-dom'
import { ConfirmAlert } from './Confirm'

function Pdfs({ data }) {

  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  return (
    <div className="p-4 flex flex-col justify-between lg:rounded-xl rounded-md gap-2 bg-slate-50 dark:bg-[#121212] shadow dark:shadow-black">
      <div className="flex gap-4 pb-2">
        <i className="fa fa-file-pdf p-4 text-white text-4xl h-max bg-red-500 rounded-xl"></i>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-[alexandria] text-sm">{data.title.length < 20 ? data.title : data.title.slice(0, 20) + '...'}</h1>
            <p className="text-xs mt-2"><i className="fa fa-user mr-1"></i> {data.author.length < 25 ? data.author : data.author.slice(0, 25) + '...'} </p>
          </div>
          <Link to={`/organizations/thesis/f/${data.faculty}`} className='text-sm mt-1 '><i className="fa mr-1 fa-book"></i> <span className='hover:underline text-teal-600'>{data.faculty}</span></Link>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 mt-1 -ml-1 items-center self-center w-full">
        <div className="rounded-lg overflow-hidden w-full">
          <Link to={`/organizations/thesis/d/${data.pdf.split('-')[0]}`} className="text-white inline-block bg-teal-600 hover:bg-teal-700 font-bold py-2 text-xs px-4 w-full text-center"><i className="fa fa-book-open mr-1"></i>  Baca Sekarang</Link>
        </div>
        {
          Cookies.get(adm) && Cookies.get(idadm) && (
            <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => ConfirmAlert(data.id, 'tesis')}></i>
          )
        }
      </div>
    </div>
  )
}

export default Pdfs