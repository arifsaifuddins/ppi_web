import Mailing from "../templates/Mailing";
import Sosmeds from "../templates/Sosmeds";

function Contact() {
  return (
    <div className="md:w-[90%] md:px-0 w-full px-4 mx-auto md:flex-row flex-col gap-20 flex justify-evenly items-center my-32">
      <img src="/assets/img/mail.svg" alt="mail" className="lg:w-96 w-72 mb-10" />
      <div className="flex flex-col lg:w-96">
        <Mailing />
        <h3 className="self-center -mb-12 z-2 mt-10 text-xl font-bold text-teal-600 px-3 w-max bg-slate-50 dark:bg-black">OR</h3>
        <p className="mt-8 border-t-1 dark:border-t-white -z-20"></p>
        <div className="text-3xl self-center mt-10">
          <Sosmeds />
        </div>
      </div>
    </div>
  );
}

export default Contact;