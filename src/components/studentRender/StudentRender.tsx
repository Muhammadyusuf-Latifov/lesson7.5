import { memo, type FC } from "react";
import type { IBlog } from "../student/Student";
import user from "../../assets/user.png";
import rasm from "../../assets/h.jpg";
interface Props {
  data: IBlog[];
}

const StudentRender: FC<Props> = ({ data }) => {
  console.log(data);

  

  if (data.length === 0) {
    return (
      <div className="container  pt-[50px]">
        <img className="block max-w-[150px] mx-auto " src={rasm} alt="" />
        <h2 className="text-center">
          There are currently no students available.
        </h2>
      </div>
    );
  } else {
    return (
      <div className="mt-[40px]">
        <div className="container ">
          <h2 className="text-center text-[30px] text-[#05a508] mb-[40px]">
            Students
          </h2>

          <div className="grid grid-cols-4 gap-[16px] mb-[40px]">
            {data.map((item) => (
              <div
                className="border shadow-lg border-[#ddd] rounded-[4px] p-[20px]"
                key={item.id}
              >
                <div>
                  <img
                    className="block max-w-[140px] mx-auto"
                    src={user}
                    alt=""
                  />
                  <hr className=" text-[#ddd] mt-[30px] mb-[20px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium text-[#3499fd]">
                    {item.fname}
                  </h3>
                  <p className="text-[#188201] font-medium">
                    {item.age} years old
                  </p>
                  <p className="text-[#7e7e7e]">{item.group}</p>
                  {/* <button
                   
                    className="w-[100%] py-[10px] border mt-[20px] rounded-[6px] bg-[crimson] text-[#fff]"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default memo(StudentRender);
