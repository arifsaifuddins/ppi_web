import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getYearPdfs } from "../../../Gets";
import Loader from "../../Loader";
import Empty from "../../layouts/Empty";
import Pdfs from "../../templates/Pdf";

function Years() {

  const [Pdf, setPdf] = useState(null)
  const [PageAll, setPageAll] = useState(0)

  const { year } = useParams()

  useEffect(() => {
    getYearPdfs(year, PageAll).then(a => setPdf(a))
  }, [year, PageAll])

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
                  <Link to={`/organizations/thesis/${Pdf.data[0].year}`}><p className=" font-bold hover:text-teal-700 py-1 px-2 rounded-lg bg-slate-100 w-max mt-6 text-sm lg:text-lg dark:bg-[#333]"># {Pdf.data[0].year}</p></Link>
                  <div className="my-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {
                      Pdf.data.map(data => (<Pdfs key={data.id} data={data} />))
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

export default Years;