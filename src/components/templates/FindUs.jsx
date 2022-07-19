import { Link } from "react-router-dom";
import Sosmeds from "./Sosmeds";

function FindUs() {
  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#111111]">
      <h1 className="text-2xl pb-4 font-bold border-b">Find Us</h1>
      <p className="mt-4">Arkaweet Block 49 No.92, Khartoum - Sudan</p>
      <p className="my-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15376.230504600715!2d32.566382!3d15.5350412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x700e635141696b5d!2sIndonesian%20Studens%20Union%20in%20Sudan%20(PPI%20Sudan)!5e0!3m2!1sid!2s!4v1647159404358!5m2!1sid!2s" className="w-[100%] h-72" allowFullScreen loading="lazy"></iframe>
      </p>
      <div className="text-2xl pt-4 border-t">
        <Sosmeds />
      </div>
    </div>
  );
}

export default FindUs;