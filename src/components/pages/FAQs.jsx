import { useEffect, useState } from "react";
import { getFAQs } from "../../Gets";
import FindUs from "../templates/FindUs";
import Mailing from "../templates/Mailing";
import Cookies from "js-cookie";
import { ConfirmAlert } from "../templates/Confirm";
import { Title } from "react-head";

function FAQs() {

  const [FAQs, setFAQs] = useState(null)
  const adm = import.meta.env.VITE_ADMIN
  const idadm = import.meta.env.VITE_ID

  useEffect(() => {
    getFAQs().then(a => {
      setFAQs(a.data)
    })
  }, [])

  return (
    <>
      <Title>PPI Sudan - FAQs</Title>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-full lg:w-[68%] h-max pb-8 dark:bg-[#222222]">
          <h1 className="text-2xl pb-4 border-b text-teal-600"># FAQs</h1>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-3xl text-teal-600 text-2xl mb-6">Who is made this site, and how?</h1>
            <div>
              <img src="https://avatars.githubusercontent.com/u/87503629?v=4" className="mb-6 w-52 rounded-xl" alt="Arief Photo" />

              <p className="first-letter:ml-5">Folks!. I am <a href="https://github.com/ariefsaifuddien" className="text-teal-600 underline">Arief Saifuddien</a>, i'm from Jepara, Central Java, Indonesia and i'm currently studying at International University of Africa for Islamic Studies Major in Kartoum, Sudan.</p>

              <h1 className="font-bold mt-6">Technologies made with:</h1>
              <div className="ml-4 mt-4">
                <p className="mb-2">- Tailwind CSS</p>
                <p className="mb-2">- React JS</p>
                <p className="mb-2">- Node JS</p>
                <p className="mb-2">- PHP Native</p>
                <p className="mb-2">- Mongo DB</p>
                <p className="mb-2">- MySQL</p>
              </div>

              <h1 className="font-bold mt-6">Tools:</h1>
              <div className="ml-4 mt-4">
                <p className="mb-2">- Visual Studio Code</p>
                <p className="mb-2">- Mozila FireFox</p>
                <p className="mb-2">- Linux - Fedora36</p>
              </div>

              <h1 className="font-bold mt-6">Social medias:</h1>
              <div className="ml-4 mt-4 flex-col flex">
                <a className="hover:text-teal-600 mb-2" href="https://facebook.com/ariefsaifuddien01" target="_blank"><i className="fab mr-1 fa-facebook text-blue-800"></i> Arief Saifuddien</a>
                <a className="hover:text-teal-600 mb-2" href="https://instagram.com/ariefsaifuddien" target="_blank"><i className="fab mr-1 fa-instagram text-pink-500"></i> ariefsaifuddien</a>
                <a className="hover:text-teal-600 mb-2" href="https://twitter.com/ariefsaifuddien" target="_blank"><i className="fab mr-1 fa-twitter text-blue-400"></i> ariefsaifuddien</a>
                <a className="hover:text-teal-600 mb-2" href="https://linkedin.com/in/ariefsaifudien" target="_blank"><i className="fab mr-1 fa-linkedin text-blue-500"></i> ariefsaifuddien</a>
                <a className="hover:text-teal-600 mb-2" href="http://wa.me/+249121208279" target="_blank"><i className="fab mr-1 fa-whatsapp text-green-500"></i> +249-12-12-082-79</a>
                <a className="hover:text-teal-600 mb-2" href="mailto:ariefsaifuddien01@gmail.com" target="_blank"><i className="fa mr-1 fa-at text-gray-300"></i> ariefsaifuddien01@gmail.com</a>
              </div>
            </div>
          </div>
          {
            (FAQs != null) && FAQs.map((a, i) => {
              return (
                <div key={i} className="flex flex-col mt-6 pt-4 border-t">
                  <h1 className="lg:text-3xl text-teal-600 text-2xl flex justify-between">
                    <p>{a.question}</p>
                    {
                      Cookies.get(adm) && Cookies.get(idadm) && (
                        <i className="fa fa-trash text-red-500 text-xl py-2 px-3 hover:bg-gray-700 rounded-lg cursor-pointer ml-4" onClick={() => ConfirmAlert(a._id, 'faqs')}></i>
                      )
                    }
                  </h1>
                  <p className="mt-6">{a.answer}</p>
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