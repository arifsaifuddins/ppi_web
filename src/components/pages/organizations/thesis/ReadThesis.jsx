import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { searchPdfs } from "../../../../Gets"
import Loader from "../../../Loader"
import Empty from "../../../layouts/Empty"
import { downloadFile } from 'fs-browsers'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

function ReadThesis() {

  const phpurl = import.meta.env.VITE_PHPURL

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  const [Pdf, setPdf] = useState(null)

  const { detail } = useParams()

  useEffect(() => {
    searchPdfs(detail, 0).then(a => setPdf(a))
  }, [detail])

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
                  <div className="my-10 w-full">
                    <div className="w-full mb-6">
                      <h1 className="text-center font-[alexandria] text-xl text-teal-600 leading-9">{Pdf.data[0].title}</h1>
                      <p onClick={() => downloadFile(`${phpurl}/files/${Pdf.data[0].pdf}`, Pdf.data[0].title + '.pdf')} className="text-white rounded-lg my-8 bg-teal-600 hover:bg-teal-700 font-bold py-2 text-xs px-4 w-full text-center cursor-pointer"><i className="fa fa-download mr-1"></i>  {Pdf.data[0].size.length > 3 && Pdf.data[0].size.length < 7 ? Pdf.data[0].size.slice(0, -3) + 'KB' : Pdf.data[0].size.length > 6 ? Pdf.data[0].size.slice(0, -6) + 'MB' : Pdf.data[0].size} Unduh</p>

                      <p className='mt-1 font-bold'><i className="fa mr-1 fa-user"></i> <span>{Pdf.data[0].author}</span></p>
                      <Link to={`/organizations/thesis/c/${Pdf.data[0].campus}`} className='mt-1 block'><i className="fa mr-1 fa-building"></i> <span className='hover:underline text-teal-600'>{Pdf.data[0].campus}</span></Link>
                      <Link to={`/organizations/thesis/f/${Pdf.data[0].faculty}`} className='mt-1 block'><i className="fa mr-1 fa-book"></i> <span className='hover:underline text-teal-600'>{Pdf.data[0].faculty}</span></Link>
                      <p className='mt-1'><i className="fa mr-1 fa-calendar"></i> <span>{Pdf.data[0].year} - {Pdf.data[0].program}</span></p>

                      <div className="flex mt-8 lg:gap-4 gap-2 justify-between">
                        <div className="flex py-2 rounded-lg shadow border justify-center">
                          <p className="px-3 text-xl hover:underline hover:text-teal-600 cursor-pointer border-r" onClick={() => pageNumber == 1 ? setPageNumber(pageNumber) : setPageNumber(pageNumber - 1)}>&laquo;</p>
                          <p className="px-3 text-xl hover:underline hover:text-teal-600 cursor-pointer" onClick={() => pageNumber == numPages ? setPageNumber(pageNumber) : setPageNumber(pageNumber + 1)}>&raquo;</p>
                        </div>
                        <div className="flex py-2 rounded-lg shadow border justify-center px-3 w-full">
                          <input type="range" min="1" max={numPages} width="500" value={pageNumber} onChange={(e) => setPageNumber(parseInt(e.target.value))} className="bg-transparent" />
                        </div>
                        <div className="flex py-2 rounded-lg shadow border justify-center">
                          <p className="px-3 text-teal-600 border-r">{pageNumber}</p>
                          <p className="px-3">{numPages}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border overflow-x-scroll w-full mx-auto p-4 shadow rounded-lg flex lg:items-center lg:justify-center">
                      <Document file={{ url: `${phpurl}/files/${Pdf.data[0].pdf}` }} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} height={document.getElementsByClassName('PdfDiv')[0]?.clientHeight * 1} />
                      </Document>
                    </div>
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
  )
}

export default ReadThesis