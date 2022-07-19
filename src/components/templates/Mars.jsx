function Mars() {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl shadow-lg hover:shadow-xl bg-white w-full dark:bg-[#111111]">
      <div className="flex items-center">
        <i className="fa mr-4 fa-music text-4xl p-4 bg-teal-600 rounded-xl text-white"></i>
        <h1 className="text-4xl lg:text-3xl font-bold">Mars PPI Sudan</h1>
      </div>
      <audio controls src="/assets/mp3/marsppi.mp3" className="w-[100%] mt-10 cursor-pointer"></audio>
    </div>
  );
}

export default Mars;