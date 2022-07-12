import Profile from "../../templates/Profile"

function Admin() {
  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('textarea')
    const close = document.createElement('p')

    close.innerHTML = '&times;'
    close.className = 'absolute right-3 top-3 cursor-pointer hover:text-teal-800 text-teal-600 text-3xl'
    close.onclick = e => e.target.parentElement.remove()

    input.placeholder = `Type the ${a}...`
    input.className = `mt-2 bg-transparent text-white py-2 pl-3 pr-9 w-[100%] rounded-xl text-lg  border outline-none border-teal-600 ${a.toLowerCase()}s`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a.toLowerCase()}`).append(div)
  }

  return (
    <>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col relative lg:px-8 px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max dark:bg-slate-800">
          <div className="flex text-2xl justify-between items-center pb-4 border-b">
            <h1 className="text-teal-600"># Admin Panel</h1>
            <p onClick={() => document.querySelector('.profile').classList.toggle('scale-0')} className="text-lg text-teal-600 hover:text-teal-700 cursor-pointer"><i className="dark:text-slate-200 text-slate-900 fa fa-angle-down mr-1"></i> Admin</p>
          </div>
          <div className="absolute lg:right-8 right-4 top-20 md:mx-0 text-slate-800 scale-0 transition duration-500 profile">
            <Profile />
          </div>
          <div className="my-10 pb-10 border-b">
            <h3 className="text-teal-600">ADD POSTS</h3>
            <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Adding post in PPI Sudan</h1>
            <form action="#">
              <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
                <div className="w-full">
                  <label htmlFor="titlepost" className="my-2 block font-bold text-lg text-teal-600">Title :</label>
                  <input required type="text" id="titlepost" placeholder="Post Title..." className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                </div>
                <div className="w-full">
                  <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Author :</label>
                  <input required type="text" id="authorpost" placeholder="Author Name..." value="Admin PPI Sudan" className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                </div>
              </div>
              <div className="flex justify-around items-center md:gap-8 md:flex-row flex-col">
                <div className="w-full">
                  <label htmlFor="postfile" className="my-2 block font-bold text-lg text-teal-600">Banner :</label>
                  <input required type="file" id="postfile" className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                </div>
                <div className="w-full">
                  <label htmlFor="authorpost" className="my-2 block font-bold text-lg text-teal-600">Category :</label>
                  <select required type="text" id="authorpost" className="bg-transparent p-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" >
                    <option value="News">News</option>
                    <option value="News">News</option>
                    <option value="News">News</option>
                    <option value="Islamic">Islamic</option>
                  </select>
                </div>
              </div>
              <div className="w-full mt-10">
                <label htmlFor="x" className="my-2 block font-bold text-lg text-teal-600">Body :</label>
                <input id="x" type="hidden" required name="content" className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                <trix-editor input="x"></trix-editor>
              </div>
              <div className="flex justify-around items-center gap-8 md:flex-row flex-col mt-8">
                <input type="date" className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                <button type="submit" className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Add New Post</button>
              </div>
            </form>
          </div>

          <div className="my-10 pb-10 border-b">
            <h3 className="text-teal-600">PRESIDENTS</h3>
            <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Change President</h1>
            <div className="flex justify-around items-center gap-8 md:flex-row flex-col">
              <form action="#" encType="multipart/form-data" method="post">
                <label className="block font-bold text-lg text-teal-600">President :</label>
                <div className="w-full">
                  <input required type="file" className="bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" />
                  <div className="border border-teal-600 rounded-xl">
                    <input required type="text" placeholder="President Name..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="Institute..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="University..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="Major of College..." className="bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
                  </div>
                  <textarea required placeholder="Quotes..." className="mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                  <button type="submit" className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%] mt-8">Change President</button>
                </div>
              </form>

              <form action="#" encType="multipart/form-data" method="post">
                <label className="block font-bold text-lg text-teal-600">Co President :</label>
                <div className="w-full">
                  <input required type="file" className="bg-transparent py-2 pl-3 rounded-xl text-lg my-4 border outline-none border-teal-600 w-[100%]" />
                  <div className="border border-teal-600 rounded-xl">
                    <input required type="text" placeholder="Co President Name..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="Institute..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="University..." className="bg-transparent py-2 pl-3 text-lg border-b outline-none border-teal-600 w-[100%]" />
                    <input required type="text" placeholder="Major of College..." className="bg-transparent py-2 pl-3 text-lg outline-none w-[100%]" />
                  </div>
                  <textarea required placeholder="Quotes..." className="mt-4 bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                  <button type="submit" className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%] mt-8">Change Co President</button>
                </div>
              </form>
            </div>
          </div>

          <div className="my-10 pb-10 border-b">
            <h3 className="text-teal-600">ADD SECTIONS</h3>
            <h1 className="md:text-4xl text-3xl font-bold mt-2 mb-8">Add Organize in PPI Sudan</h1>
            <form action="#" encType="multipart/form-data">
              <div className="flex justify-around md:gap-8 md:flex-row flex-col">
                <div className="w-full">
                  <label htmlFor="titlesec" className="my-2 block font-bold text-lg text-teal-600">Title :</label>
                  <div className="border border-teal-600 rounded-xl">
                    <input required type="text" id="titlesec" placeholder="Section Title..." className="bg-transparent py-2 pl-3 text-lg  border-b outline-none border-teal-600 w-[100%]" />
                    <select required type="text" id="authorpost" className="bg-transparent p-3 text-lg outline-none w-[100%]" >
                      <option value="Structures">Structures</option>
                      <option value="Autonomous">Autonomous</option>
                      <option value="Institutes">Institutes</option>
                    </select>
                  </div>
                  <label htmlFor="logo" className="my-2 block font-bold text-lg text-teal-600">Logo :</label>
                  <input required type="file" className="bg-transparent py-2 pl-3 rounded-xl text-lg border outline-none border-teal-600 w-[100%]" />
                </div>
                <div className="w-full">
                  <label className="my-2 block font-bold text-lg text-teal-600">Description :</label>
                  <textarea required placeholder="Description of Section..." className="bg-transparent p-3 h-24 mb-2 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
                  <button type="submit" className="text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%] mt-8">Add Section</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* sidebar */}

        <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
          <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
            <h1 className="text-2xl pb-4 font-bold border-b">Add an Admin</h1>
            <form method="post">
              <input required type="text" placeholder="Admin Name..." className="mt-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <input required type="email" placeholder="Admin Email..." className="email mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <input required type="password" placeholder="Admin Password..." className="email mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <input required type="password" placeholder="Confirm Admin Password..." className="email mt-2 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Add an Admin</p>
            </form>
          </div>

          <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
            <h1 className="text-2xl pb-4 font-bold border-b">Change Vision & Mission</h1>
            <label htmlFor="vision" className="my-2 block font-bold text-lg text-teal-600">Vision :</label>
            <textarea required id="vision" placeholder="Type the Vision..." className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />

            <div className="mission">
              <div className="flex justify-between text-xl items-end text-teal-600 font-bold my-3">
                <label htmlFor="mission" className="block">Missions :</label>
                <i onClick={() => addInput('Mission')} className="h-max missions text-lg -mb-1 cursor-pointer pr-2 fa fa-plus"></i>
              </div>
              <textarea required id="mission" placeholder="Type the Mission..." className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
            </div>
            <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Change Vision & Mission</p>
          </div>

          <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
            <h1 className="text-2xl pb-4 font-bold border-b">Add a FAQs</h1>
            <form method="post">
              <input required type="text" name="question" placeholder="Type the Question..." className="my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <textarea required name="answer" placeholder="Type the Answer..." className="bg-transparent py-2 pl-3 rounded-xl text-lg  border outline-none border-teal-600 w-[100%]" />
              <p className="cursor-pointer text-center mt-4 bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Add an FAQs</p>
            </form>
          </div>

          <div className="p-4 bg-white shadow rounded-xl dark:bg-slate-800">
            <h1 className="text-2xl pb-4 font-bold border-b">Add Post Category</h1>
            <form method="post">
              <input required type="text" name="category" placeholder="Type the Category..." className="my-4 bg-transparent py-2 pl-3 rounded-full text-lg  border outline-none border-teal-600 w-[100%]" />
              <p className="cursor-pointer text-center bg-teal-600 text-white py-2 pl-3 rounded-full text-lg hover:bg-teal-700 font-bold w-[100%]">Add Post Category</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;