import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSection } from "../../../Gets";
import parse from 'html-react-parser';
import Loader from "../../Loader";
import Empty from "../../layouts/Empty";

function Section() {

  const phpurl = import.meta.env.VITE_PHPURL

  const [Sections, setSections] = useState(null)

  const { slug } = useParams()

  useEffect(() => {
    getSection(slug).then(a => {
      setSections(a)
    })
  }, [slug])

  return (
    <>
      {
        (Sections == null) ? (
          <Loader />
        ) : (
          <>
            {
              (Sections.data != null) ? (
                <div className="flex flex-col mt-10">
                  <h3 className="text-teal-600">{Sections.data[0].title}</h3>
                  <h1 className="md:text-3xl text-2xl font-bold my-3">Do you know, <br />what's the {Sections.data[0].title}?</h1>
                  <div className="my-10">
                    <div className="w-max flex-col flex items-center gap-8 mx-auto mt-10">
                      <img src={phpurl + '/files/' + Sections.data[0].section_logo} alt="poster" className="h-52" />
                      <h3 className="text-teal-600 font-bold text-2xl">{Sections.data[0].title}</h3>
                    </div>
                    <div className="my-20 text-justify" >{parse(Sections.data[0].description)}</div>
                    <img src={phpurl + '/files/' + Sections.data[0].section_poster} alt="poster" className="w-full mt-6" />
                  </div>
                </div>
              ) : (
                <Empty empty={Sections.message} />
              )
            }
          </>
        )
      }
    </>
  );
}

export default Section;