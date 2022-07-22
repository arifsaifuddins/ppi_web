import { delPdf } from "../../Gets";
import { downloadFile } from 'fs-browsers';

function Pdfs({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL

  return (
    <div className="p-4 flex lg:rounded-xl rounded-md gap-4 bg-slate-50 dark:bg-[#121212] shadow dark:shadow-black">
      <i className="fa fa-file-pdf p-4 text-white text-6xl bg-red-500 rounded-xl"></i>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-teal-600">{data.title.slice(0, 18)}...</h1>
          <p className="text-xs mt-1"><i className="fa fa-user mr-1"></i> {data.author.slice(0, 10)}... <i className="fa mx-1 fa-calendar-days"></i> {data.year} </p>
        </div>
        <div className="flex gap-4 mt-1 -ml-1 items-center">
          <p onClick={() => downloadFile(`${phpurl}/files/${data.pdf}`, data.pdf)} className="text-white bg-teal-600 hover:bg-teal-700 font-bold py-1 text-xs px-3 rounded-full cursor-pointer"><i className="fa fa-download mr-1"></i> Download</p>
          {
            localStorage.getItem('admin') && localStorage.getItem('id_admin') && (
              <i className="fa fa-trash text-red-500 hover:text-red-700 cursor-pointer" onClick={() => delPdf(data.id)}></i>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Pdfs;