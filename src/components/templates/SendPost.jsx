function SendPost() {
  return (
    <div className="p-4 bg-white shadow rounded-xl dark:bg-[#111111]">
      <h1 className="text-2xl pb-4 font-bold border-b">Quetions</h1>
      <div className="flex flex-col items-center">
        <img src="/assets/img/question.svg" alt="question" className="h-32 w-32 my-10" />
        <h1 className="font-bold">Do you want to post your article on PPI site?</h1>
        <p>Send yours here...</p>
        <a href="http://wa.me/+249122290184" target="_blank" className="text-center mt-4 bg-green-500 text-white py-2 pl-3 rounded-lg text-lg hover:bg-green-600 font-bold w-[100%]"><i className="fab mr-1 fa-whatsapp"></i> WhatsAppp</a>
        <a href="mailto:sudanppi@gmail.com" target="_blank" className="text-center mt-4 bg-red-500 text-white py-2 pl-3 rounded-lg text-lg hover:bg-red-600 font-bold w-[100%]"><i className="fa mr-1 fa-envelope"></i> Email</a>
      </div>
    </div>
  );
}

export default SendPost;