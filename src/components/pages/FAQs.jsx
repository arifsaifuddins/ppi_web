import FindUs from "../templates/FindUs";
import Mailing from "../templates/Mailing";

function FAQs() {
  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max pb-8 dark:bg-slate-800">
          <h1 className="text-2xl pb-4 border-b text-teal-600"># FAQs</h1>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-4xl text-teal-600 text-3xl">Webnya dibuat pake apa, Min?</h1>
            <p className="text-xl mt-6">Web ini dibuat pake persaan.</p>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-4xl text-teal-600 text-3xl">Webnya dibuat pake apa, Min?</h1>
            <p className="text-xl mt-6">Web ini dibuat pake persaan.</p>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-4xl text-teal-600 text-3xl">Webnya dibuat pake apa, Min?</h1>
            <p className="text-xl mt-6">Web ini dibuat pake persaan.</p>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="lg:text-4xl text-teal-600 text-3xl">Webnya dibuat pake apa, Min?</h1>
            <p className="text-xl mt-6">Web ini dibuat pake persaan.</p>
          </div>
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">

          <FindUs />

          <Mailing />

        </div>
      </div>
    </>
  );
}

export default FAQs;