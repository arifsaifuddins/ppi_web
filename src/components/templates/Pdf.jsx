import { downloadFile } from 'fs-browsers';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { ConfirmAlert } from './Confirm';

function Pdfs({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  return (
    <div className="p-4 flex flex-col lg:rounded-xl rounded-md gap-2 bg-slate-50 dark:bg-[#121212] shadow dark:shadow-black">
      <div className="flex gap-4 pb-2">
        <i className="fa fa-file-pdf p-4 text-white text-4xl bg-red-500 rounded-xl"></i>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold">{data.title.length < 25 ? data.title : data.title.slice(0, 25) + '...'}</h1>
            <p className="text-xs mt-1"><i className="fa mr-1 fa-calendar-days"></i> {data.year} <i className="fa fa-user ml-2 mr-1"></i> {data.author.length < 20 ? data.author : data.author.slice(0, 20) + '...'} </p>
          </div>
          <Link to={`/organizations/thesis/f/${data.faculty}`} className='text-sm mt-1 '><i className="fa mr-1 fa-book"></i> <span className='hover:underline text-teal-600'>{data.faculty}</span></Link>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 mt-1 -ml-1 items-center self-center w-full">
        <div className="rounded-lg overflow-hidden flex w-full">
          <a href={`${phpurl}/files/${data.pdf}`} target="_blank" className="text-white bg-yellow-400 hover:bg-yellow-500 font-bold py-2 text-xs px-4 w-max text-center cursor-pointer"><i className="fa fa-eye"></i></a>
          <p onClick={() => downloadFile(`${phpurl}/files/${data.pdf}`, data.pdf)} className="text-white bg-teal-600 hover:bg-teal-700 font-bold py-2 text-xs px-4 w-full text-center cursor-pointer"><i className="fa fa-download mr-1"></i>  {data.size.length > 3 && data.size.length < 7 ? data.size.slice(0, -3) + 'KB' : data.size.length > 6 ? data.size.slice(0, -6) + 'MB' : data.size} Unduh</p>
        </div>
        {
          Cookies.get(adm) && Cookies.get(idadm) && (
            <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => ConfirmAlert(data.id, 'tesis')}></i>
          )
        }
      </div>
    </div>
  );
}

export default Pdfs;