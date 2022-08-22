import { Link } from "react-router-dom";

function BlogSide({ data }) {

  const phpurl = import.meta.env.VITE_PHPURL

  const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  const dates = data.date.split('-')
  let mn = dates[1] == '01' ? month[0] : dates[1] == '02' ? month[1] : dates[1] == '03' ? month[2] : dates[1] == '04' ? month[3] : dates[1] == '05' ? month[4] : dates[1] == '06' ? month[5] : dates[1] == '07' ? month[6] : dates[1] == '08' ? month[7] : dates[1] == '09' ? month[8] : dates[1] == '10' ? month[9] : dates[1] == '11' ? month[10] : month[11]

  return (
    <Link to={`/blog/${data.slug}`} className="flex p-4 justify-between items-center border-t hover:bg-slate-50 dark:hover:bg-[#333333]">
      <div className="flex justify-between flex-col w-[70%]">
        <p className="text-xl font-bold mb-2 text-teal-600 hover:underline">{data.title.length < 30 ? data.title : data.title.slice(0, 30) + '...'}</p>
        <p className="font-thin text-sm text-slate-500 dark:text-slate-200"><i className="fa mr-1 fa-calendar-days"></i> {dates[2]} {mn} <i className="fa mx-1 fa-eye"></i> {data.viewer}</p>
      </div>
      <img src={phpurl + '/files/' + data.blog_poster} alt="poster" className="h-20 w-[30%] ml-4 object-cover hover:object-right-bottom transition-all duration-500 rounded-xl" />
    </Link>
  );
}

export default BlogSide;