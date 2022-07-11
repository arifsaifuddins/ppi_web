import { Link } from "react-router-dom";
import BlogSide from "../../templates/BlogSide";
import SendPost from "../../templates/SendPost";

function Blog() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
      <div className="flex flex-col lg:px-8 sm:px-4 py-4 bg-white shadow rounded-xl w-[100%] h-max  dark:bg-slate-800">
        <Link to={'/blogs'} className="text-2xl p-4 md:px-0 border-b text-teal-700"># Blogs<span className="text-slate-800 text-xl font-thin"> {'>'} Ini Judul Postnya</span></Link>

        <div className="flex flex-col">
          <div className="px-4 md:px-0">
            <h1 className="md:text-4xl text-3xl font-bold mt-10 text-teal-600">Ini Judul Postnya</h1>
            <div className="flex md:gap-4 gap-2 text-slate-500 py-5 border-b mb-8">
              <p>News</p>
              <p><i className="fa mr-1 fa-user"></i> Arief Saifuddien</p>
              <p><i className="fa mr-1 fa-calendar-days"></i> 22 May 2022</p>
              <p><i className="fa mr-1 fa-eye"></i> 0</p>
            </div>
          </div>
          <img src="/assets/img/default.jpg" alt="banner-post" className="mb-8" />
          <article className="px-4 md:px-0">
            {
              data.map(o => {
                return (
                  <p data={o} key={o} >
                    <h1 className="mb-8 font-bold text-xl">Sub title dari judul potsnya</h1>
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum molestiae sequi obcaecati saepe magni quia dolor cumque. Delectus perspiciatis error laborum repellendus, numquam magnam. Deleniti, id, amet repellendus sequi non aspernatur facilis natus assumenda similique rem dolorum possimus officiis voluptatum aliquid consequatur ex cumque? Nesciunt corrupti harum recusandae ducimus?</p>
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum molestiae sequi obcaecati saepe magni quia dolor cumque. Delectus perspiciatis error laborum repellendus, numquam magnam. Deleniti, id, amet repellendus sequi non aspernatur facilis natus assumenda similique rem dolorum possimus officiis voluptatum aliquid consequatur ex cumque? Nesciunt corrupti harum recusandae ducimus?</p>
                  </p>
                )
              })
            }
          </article>
        </div>
      </div>

      {/* sidebar */}

      <div className="flex flex-col lg:w-[45%] w-full lg:mx-0 gap-8">
        <div className="bg-white shadow rounded-xl overflow-hidden dark:bg-slate-800">
          <h1 className="text-2xl p-4 font-bold">News Category</h1>
          {
            data.map(o => {
              return (
                <BlogSide data={o} key={o} />
              )
            })
          }
        </div>

        <SendPost />
      </div>
    </div>
  );
}

export default Blog;