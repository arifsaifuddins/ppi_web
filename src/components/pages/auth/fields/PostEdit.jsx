import { useEffect, useState } from "react"
import { Title } from "react-head"
import { getCategories } from "../../../../Gets"
import PsEdit from "./PsEdit"

function PostEdit() {

  const [Categories, setCategories] = useState(null)

  useEffect(() => {
    getCategories().then(a => setCategories(a.data))
  }, [])

  const props = {
    category: Categories,
  }

  return (
    <>
      <Title>PPI Sudan - Artikel - Edit</Title>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col relative lg:px-8 px-4 py-4 mx-auto bg-white shadow rounded-xl w-full lg:w-[68%] h-max dark:bg-[#222222]">
          <div className="flex text-2xl justify-between items-center pb-4 border-b">
            <h1 className="text-teal-600"># Edit Artikel</h1>
          </div>

          <PsEdit {...props} />
        </div>
      </div>
    </>
  );
}

export default PostEdit;