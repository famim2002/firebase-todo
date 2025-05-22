import React, { useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const Home = () => {
  const [todoData, setTodoData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const db = getDatabase();

  const handleSubmit = () => {
   
    set(push(ref(db, "todo/")), {
      todo_item: todoData,
    });
  };

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "todo/"), (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setTodoList(arr);
    });
  }, []);

 

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
                onChange={(e) => setTodoData(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="text-[20px] border-2 bg-stone-200 px-3 cursor-pointer hover:bg-green-300"
              >
                submit
              </button>
            </div>
            <div className="flex flex-col gap-5 items-center ">
              <ul className="">
                {
                  todoList.map((item) => (
                  <li className="text-left  text-[25px] underline list-disc">
                    {item.todo_item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
