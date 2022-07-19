function Loader() {
  return (
    <div className="flex h-96 w-full">
      <div className="m-auto animate-spin duration-700 w-8 h-8 rounded-full p-1 spin-loader">
        <span className="w-full h-full bg-white dark:bg-[#111111] inline-block rounded-full"></span>
      </div>
    </div>
  );
}

export default Loader;