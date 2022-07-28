import { useEffect, useState } from "react"
import { getcoPres, getPres } from "../../../Gets"
import Loader from "../../Loader"

function Presidents() {

  const phpurl = import.meta.env.VITE_PHPURL

  const [Pres, setPres] = useState(null)
  const [coPres, setcoPres] = useState(null)

  useEffect(() => {
    getPres().then(a => {
      setPres(a.data)
    })

    getcoPres().then(a => {
      setcoPres(a.data)
    })
  }, [])

  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-teal-600">PRESIDEN</h3>
      <h1 className="md:text-3xl text-2xl font-bold my-3">Tahukah kamu, <br />Siapa Presiden sekarang?</h1>
      {
        (Pres == null && coPres == null) ? (
          <Loader />
        ) : (
          <div>
            {
              (Pres != null) && (
                <div className="my-10 flex gap-8 flex-col lg:flex-row">
                  <img src={phpurl + '/files/' + Pres[0].president_poster} alt="president" className="lg:w-60 shadow-lg lg:h-60 w-full object-cover" />
                  <div>
                    <h1 className="font-bold text-xl mb-4 text-teal-600">Presiden</h1>
                    <h2 className="font-bold text-2xl my-4">{Pres[0].name}</h2>
                    <p><i className="fa mr-1 fa-cake-candles"></i> {Pres[0].birth}</p>
                    <p><i className="fa mr-1 fa-location-arrow"></i> {Pres[0].institute}</p>
                    <p><i className="fa mr-1 fa-building"></i> {Pres[0].university}</p>
                    <p><i className="fa mr-1 fa-book"></i> {Pres[0].major}</p>
                    <p><i className="fa mr-1 fa-quote-left"></i> {Pres[0].quotes}</p>
                  </div>
                </div>
              )
            }
            <hr />
            {
              (coPres != null) && (
                <div className="my-10 flex gap-8 flex-col lg:flex-row">
                  <img src={phpurl + '/files/' + coPres[0].president_poster} alt="president" className="lg:w-60 shadow-lg lg:h-60 w-full object-cover" />
                  <div>
                    <h1 className="font-bold text-xl mb-4 text-teal-600">Wakil Presiden</h1>
                    <h2 className="font-bold text-2xl my-4">{coPres[0].name}</h2>
                    <p><i className="fa mr-1 fa-cake-candles"></i> {coPres[0].birth}</p>
                    <p><i className="fa mr-1 fa-location-arrow"></i> {coPres[0].institute}</p>
                    <p><i className="fa mr-1 fa-building"></i> {coPres[0].university}</p>
                    <p><i className="fa mr-1 fa-book"></i> {coPres[0].major}</p>
                    <p><i className="fa mr-1 fa-quote-left"></i> {coPres[0].quotes}</p>
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default Presidents;