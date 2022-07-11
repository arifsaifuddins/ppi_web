function Presidents() {
  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-teal-600">PRESIDENTS</h3>
      <h1 className="md:text-4xl text-3xl font-bold my-3">Do you know, <br />who is PPI Sudan president?</h1>
      <div>
        <div className="my-10 flex gap-8 flex-col lg:flex-row">
          <img src="/assets/img/default.jpg" alt="president" className="lg:w-60 lg:h-60 w-full object-cover" />
          <div>
            <h1 className="font-bold text-xl mb-4 text-teal-600">President</h1>
            <h2 className="font-bold text-2xl my-4">Arya Kurniantoro</h2>
            <p><i className="fa mr-1 fa-location-arrow"></i> Jakarta</p>
            <p><i className="fa mr-1 fa-building"></i> International University of Africa</p>
            <p><i className="fa mr-1 fa-book"></i> Sharia</p>
            <p><i className="fa mr-1 fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae magnam dolores inventore molestiae fugiat aut aliquam non placeat unde.</p>
          </div>
        </div>
        <hr />
        <div className="my-10 flex gap-8 flex-col lg:flex-row">
          <img src="/assets/img/default.jpg" alt="copresident" className="lg:w-60 lg:h-60 w-full object-cover" />
          <div>
            <h1 className="font-bold text-xl mb-4 text-teal-600">Co President</h1>
            <h2 className="font-bold text-2xl my-4">Saifurrahman</h2>
            <p><i className="fa mr-1 fa-location-arrow"></i> Yogyakarta</p>
            <p><i className="fa mr-1 fa-building"></i> International University of Africa</p>
            <p><i className="fa mr-1 fa-book"></i> Languages</p>
            <p><i className="fa mr-1 fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae magnam dolores inventore molestiae fugiat aut aliquam non placeat unde.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presidents;