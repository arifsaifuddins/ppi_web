function Profile({ name, email }) {

  return (
    <div className="p-4 dark:text-slate-200 bg-white shadow rounded-xl dark:bg-[#111111] w-max flex flex-col items-center border">
      <img src="/assets/img/ppisudan.png" alt="ppi" className="w-20" />
      <h1 className="text-xl text-green-600 font-semibold mt-6">{name}</h1>
      <p className="text-lg">{email}</p>
      <p onClick={() => {
        window.location.assign('/')
        localStorage.clear()
      }} className="cursor-pointer text-center mt-4 bg-red-600 text-white py-1 px-3 rounded-lg text-md hover:bg-red-700 font-bold w-[100%]"><i className="fa fa-arrow-right-from-bracket ml-1"></i> Logout</p>
    </div>
  );
}

export default Profile;