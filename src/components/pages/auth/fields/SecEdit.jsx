import { Title } from "react-head";
import OrgEdit from "./OrgEdit";

function SecEdit() {

  return (
    <>
      <Title>PPI Sudan - Seksi - Edit</Title>
      <div className="flex gap-8 md:w-[90%] md:px-0 w-full lg:flex-row flex-col mx-auto lg:my-10 my-4">
        <div className="flex flex-col relative lg:px-8 px-4 py-4 mx-auto bg-white shadow rounded-xl w-full lg:w-[68%] h-max dark:bg-[#222222]">
          <div className="flex text-2xl justify-between items-center pb-4 border-b">
            <h1 className="text-teal-600"># Edit Seksi</h1>
          </div>

          <OrgEdit />
        </div>
      </div>
    </>
  );
}

export default SecEdit;