import {
  memo,
  useState,
  type ChangeEvent,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { IBlog } from "../student/Student";

interface Props {
  setData: Dispatch<SetStateAction<IBlog[]>>;
}
interface Istate {
  fname: string;
  age: string | number;
  address: string;
  group: string;
}
const initialState: Istate = {
  fname: "",
  age: "",
  address: "",
  group: "",
};
const StudentForm: FC<Props> = ({ setData }) => {
  const [formData, setFormData] = useState<Istate>(initialState);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newBlog: IBlog = {
      ...formData,
      id: Date.now(),
    };
      setData((prev) => [...prev, newBlog]);
       setFormData(initialState);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
     
  };
  return (
    <div className="StudentForm">
      <div className="mt-[40px]">
        <form
          className="flex pt-[50px] flex-col bg-[#3f8fff] p-[12px] max-w-[40%] mx-auto  shadow-lg rounded-[5px]"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="flex items-center justify-between gap-[10px]">
            <input
              className="w-[50%] shadow-md"
              required
              value={formData.fname}
              type="text"
              onChange={handleChange}
              placeholder="Enter your full name"
              name="fname"
              id=""
            />
            <input
              className="w-[50%] shadow-md"
              value={formData.age}
              required
              type="number"
              onChange={handleChange}
              placeholder="Enter your age"
              name="age"
              id=""
            />
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <input
              className="w-[50%] shadow-md"
              required
              value={formData.address}
              type="text"
              placeholder="Enter your address"
              name="address"
              onChange={handleChange}
              id=""
            />
            <input
              className="w-[50%] shadow-md"
              value={formData.group}
              required
              type="text"
              placeholder="Enter your group"
              onChange={handleChange}
              name="group"
              id=""
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-[#777575] py-[10px] bg-[#fff]  rounded-[22px] px-[30px] mb-[12px] mt-[20px]">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(StudentForm);

