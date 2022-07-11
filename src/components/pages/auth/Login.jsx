function Login() {
  return (
    <div className="md:w-[90%] md:px-0 w-full px-4 lg:flex-row flex-col-reverse gap-10 mt-20 lg:mt-0 mx-auto flex justify-evenly items-center">
      <div className="p-4 bg-white my-32 shadow rounded-xl w-96 dark:bg-slate-800">
        <h1 className="text-2xl mb-4 pb-4 font-bold border-b">Login to PPI Sudan</h1>
        <form method="get">
          <input required autoFocus type="email" placeholder="Your Email..." className="email mt-2 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
          <input required type="password" placeholder="Your Password..." className="subject mt-4 bg-transparent py-2 pl-3 rounded-full text-md  border outline-none border-teal-600 w-[100%]" />
          <button type="submit" className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-600 font-bold w-[100%]">Login as Admin</button>
        </form>
      </div>
      <img src="/assets/img/login.svg" alt="login" className="md:w-96 w-72" />
    </div>
  );
}

export default Login;