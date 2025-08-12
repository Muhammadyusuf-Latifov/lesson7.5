import { memo, useState } from "react";
import StudentForm from "../studentForm/StudentForm";
import StudentRender from "../studentRender/StudentRender";
export interface IBlog {
  id: number;
  fname: string;
  age: number | string;
  address: string;
  group: string;
}


const Student = () => {
  const [data, setData] = useState<IBlog[]>([]);
  console.log(data);

  return (
    <div className="Student">
      <StudentForm setData={setData} />
      <StudentRender data={data}  />
    </div>
  );
};

export default memo(Student);

// import { memo, useState } from "react";
// import FormControl from "./FormControl";
// import View from "./View";
// export interface IBlog {
//   id: number;
//   title: string;
//   description: string;
// }
// const Main = () => {
//   const [data, setData] = useState<IBlog[]>([]);
//   console.log(data);

//   return (
//     <div className="Main">
//       <FormControl setData={setData} />
//       <View data={data} />
//     </div>
//   );
// };

// export default memo(Main);
