function Profile() {
  return (
    <div className="p-4 dark:text-slate-200 bg-white shadow rounded-xl dark:bg-slate-800 w-max flex flex-col items-center border">
      <img src="/assets/img/ppisudan.png" alt="ppi" className="w-20" />
      <h1 className="text-xl text-green-600 font-semibold mt-6">ADMIN PPISUDAN</h1>
      <p className="text-lg">sudanppi@gmail.com</p>
      <p className="text-lg font-thin">@ppsudan_admin</p>
      <p className="cursor-pointer text-center mt-4 bg-red-600 text-white py-1 pl-2 rounded-lg text-md hover:bg-red-700 font-bold w-[100%]"><i className="fa fa-arrow-right-from-bracket ml-1"></i> Logout</p>
    </div>
  );
}

export default Profile;