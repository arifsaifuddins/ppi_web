function Mailing() {
  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
      <h1 className="text-2xl pb-4 font-bold border-b dark:text-slate-200">Mailig PPI Sudan</h1>
      <form method="post">
        <input required type="text" placeholder="Your Subject/Name..." className="subject mt-4 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <input required type="email" placeholder="Your Email..." className="email mt-2 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
        <textarea required placeholder="Your Message..." className="message mt-8 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
        <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Send An Email</p>
      </form>
    </div>
  );
}

export default Mailing;