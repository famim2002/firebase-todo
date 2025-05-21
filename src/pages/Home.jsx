import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {
  const [todoData, setTodoData] = useState("");
  return (
    <>
      <section className=" py-24">
        <div className="container">
          <h1 className="text-[50px] font-semibold text-center pb-10">
            todo list
          </h1>
          <div className="text-center flex flex-col gap-10">
            <div className="flex gap-5 justify-center">
              <input
                type="text"
                className="text-[20px] border-[1px] p-2"
                              placeholder="your text"
                              onChange={()=>setTodoData(e.target.value)}
              />
              <button onClick={handleSubmit} className="text-[20px] border-2 bg-stone-200 px-3 cursor-pointer hover:bg-green-300">
                submit
              </button>
            </div>
            <div className="flex flex-col gap-5 items-center ">
              <ul className="">
                <li className="text-[25px] underline list-disc">mern stack</li>
                <li className="text-[25px] underline list-disc">full stack</li>
                <li className="text-[25px] underline list-disc">node js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
