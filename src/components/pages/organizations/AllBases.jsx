import { useEffect, useState } from "react";
import Loader from "../../Loader";
import Empty from "../../layouts/Empty";
import { getBasePdfs } from "../../../Gets";
import PdfsBase from "../../templates/PdfBase";

function AllBases() {

  const [Pdf, setPdf] = useState(null)
  const [PageAll, setPageAll] = useState(0)

  useEffect(() => {
    getBasePdfs(PageAll).then(a => setPdf(a))
  }, [PageAll])

  return (
    <>
      {
        (Pdf == null) ? (
          <Loader />
        ) : (
          <>
            {
              (Pdf.data != null) ? (
                <>
                  <div className="my-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {
                      Pdf.data.map(data => (<PdfsBase key={data.id} data={data} />))
                    }
                  </div>
                  <div className="flex items-center gap-4 mx-auto">
                    {
                      Pdf.previouspage != 0 && (
                        <>
                          <a href="#"><i onClick={() => setPageAll(1)} className="hover:text-teal-600 my-10  cursor-pointer fa fa-arrow-left-long pl-1 border-l-2 border-l-black dark:border-l-slate-200"></i></a>
                          <p onClick={() => setPageAll(Pdf.previouspage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600"><a href="#">{Pdf.previouspage}</a></p>
                        </>
                      )
                    }
                    {
                      Pdf.currentpage >= 1 && Pdf.nextpage >= 0 && (
                        <p onClick={() => setPageAll(Pdf.currentpage)} className=" my-11 px-3 cursor-pointer text-white rounded-full bg-teal-600 border border-teal-600"><a href="#">{Pdf.currentpage}</a></p>
                      )
                    }
                    {
                      Pdf.nextpage != 0 && (
                        <>
                          <p onClick={() => setPageAll(Pdf.nextpage)} className=" my-11 px-3 cursor-pointer hover:bg-teal-600 rounded-full border border-teal-600"><a href="#">{Pdf.nextpage}</a></p>
                          <a href="#"><i className=" hover:text-teal-600 my-10 cursor-pointer fa fa-arrow-right-long pr-1 border-r-2 border-r-black dark:border-r-slate-200" onClick={() => setPageAll(Pdf.totalpage)}></i></a>
                        </>
                      )
                    }
                  </div>
                </>
              ) : (
                <Empty empty={Pdf.msg} />
              )
            }
          </>
        )
      }
    </>
  );
}

export default AllBases;