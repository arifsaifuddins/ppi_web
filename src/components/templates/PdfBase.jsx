import { downloadFile } from 'fs-browsers';
import Cookies from "js-cookie";
import { ConfirmAlert } from './Confirm';

function PdfsBase({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  return (
    <div className="py-4 flex flex-col lg:rounded-xl rounded-md gap-4 bg-slate-50 dark:bg-[#121212] shadow dark:shadow-black">
      <h1 className='font-bold text-center px-4'>{data.title.length < 50 ? data.title.toUpperCase() : data.title.toUpperCase().slice(0, 50) + '...'}</h1>
      <img src={`${phpurl}/files/${data.thumb}`} alt="thumb" className='w-full h-52 object-cover border-y' />
      <div className="flex gap-4 mt-1 -ml-1 px-4 items-center self-center w-full">
        <div className="rounded-lg overflow-hidden flex w-full">
          <p onClick={() => downloadFile(`${phpurl}/files/${data.pdf}`, data.pdf)} className="text-white bg-teal-600 hover:bg-teal-700 font-bold py-2 text-xs px-4 w-full text-center cursor-pointer"><i className="fa fa-download mr-1"></i> {data.size.length < 7 && data.size.length > 3 ? data.size.slice(0, -3) + 'KB' : data.size.length > 6 ? data.size.slice(0, -6) + 'MB' : data.size} Unduh</p>
        </div>
        {
          Cookies.get(adm) && Cookies.get(idadm) && (
            <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => ConfirmAlert(data.id, 'base')}></i>
          )
        }
      </div>
    </div>
  );
}

export default PdfsBase;