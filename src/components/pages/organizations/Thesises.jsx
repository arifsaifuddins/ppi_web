import { Outlet } from "react-router-dom";

function Thesis() {

  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-teal-600">Thesises PDF</h3>
      <h1 className="md:text-3xl text-2xl font-bold my-3">Do you know, <br />you can read it now here?</h1>
      <Outlet />
    </div>

  );
}

export default Thesis;