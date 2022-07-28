import { useEffect, useState } from "react";
import { delFaqs, getFAQs } from "../../Gets";
import FindUs from "../templates/FindUs";
import Mailing from "../templates/Mailing";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

function FAQs() {

  const [FAQs, setFAQs] = useState(null)

  useEffect(() => {
    getFAQs().then(a => {
      setFAQs(a.data)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>PPI Sudan - FAQs</title>
      </Helmet>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-full lg:w-[68%] h-max pb-8 dark:bg-[#222222]">
          <h1 className="text-2xl pb-4 border-b text-teal-600"># FAQs</h1>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-3xl text-teal-600 text-2xl mb-6">Who is made this site, and how?</h1>
            <div>
              <p className="first-letter:ml-5">Hello World!. I am <a href="https://github.com/saifuddien" className="text-teal-600 hover:underline">Arief Saifuddien</a>, i'm from Jepara, Central Java, Indonesia and i'm currently studying in International University of Africa for Islamic Studies Major.</p>

              <h1 className="font-bold mt-6">Technologies :</h1>
              <div className="ml-4 mt-4">
                <p className="mb-2">- Tailwind CSS</p>
                <p className="mb-2">- React JS</p>
                <p className="mb-2">- Node JS</p>
                <p className="mb-2">- PHP Native</p>
                <p className="mb-2">- Mongo DB</p>
                <p className="mb-2">- MySQL</p>
              </div>

              <h1 className="font-bold mt-6">Tools :</h1>
              <div className="ml-4 mt-4">
                <p className="mb-2">- VS Code</p>
                <p className="mb-2">- FireFox</p>
              </div>

              <h1 className="font-bold mt-6">Operating System :</h1>
              <div className="mt-4">
                <p className="text-xl font-bold text-center">Linux - Fedora36</p>
                <img src="/assets/img/fedora.png" alt="fedora" />
              </div>

              <h1 className="font-bold mt-4">Socmeds :</h1>
              <div className="ml-4 mt-4 flex-col flex">
                <a className="hover:text-teal-600 mb-2" href="https://facebook.com/saifuddien01" target="_blank"><i className="fab mr-1 fa-facebook text-blue-800"></i> Arief Saifuddien</a>
                <a className="hover:text-teal-600 mb-2" href="https://instagram.com/saifuddien_" target="_blank"><i className="fab mr-1 fa-instagram text-pink-500"></i> saifuddien_</a>
                <a className="hover:text-teal-600 mb-2" href="https://twitter.com/saifuddien_" target="_blank"><i className="fab mr-1 fa-twitter text-blue-400"></i> saifuddien_</a>
                <a className="hover:text-teal-600 mb-2" href="http://wa.me/+249121208279" target="_blank"><i className="fab mr-1 fa-whatsapp text-green-500"></i> +249 12 12 082 79</a>
                <a className="hover:text-teal-600 mb-2" href="mailto:ariefsaifuddien01@gmail.com" target="_blank"><i className="fa mr-1 fa-at text-gray-300"></i> ariefsaifuddien01@gmail.com</a>
              </div>
            </div>
          </div>
          {
            (FAQs != null) && FAQs.map((a, i) => {
              return (
                <div key={i} className="flex flex-col mt-4 pt-4 border-t">
                  <h1 className="lg:text-3xl text-teal-600 text-2xl flex justify-between">
                    <p>{a.question}</p>
                    {
                      Cookies.get('admin') && Cookies.get('id_admin') && (
                        <i className="fa fa-trash text-red-500 text-xl hover:text-red-700 cursor-pointer ml-4" onClick={() => delFaqs(a._id)}></i>
                      )
                    }
                  </h1>
                  <p className="text-xl mt-6">{a.answer}</p>
                </div>
              )
            })
          }
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[30%] w-full lg:mx-0 gap-8">

          <FindUs />

          <Mailing />

        </div>
      </div>
    </>
  );
}

export default FAQs;