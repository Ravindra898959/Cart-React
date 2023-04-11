import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
import Sidebar from "../components/sidebar";
import { FiUsers } from "react-icons/fi";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/headerData/sidebarData.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" w-screen	flex justify-evenly  p-0.5 ">
        <div className="flex justify-around  items-center  w-3/5">
          <img src="./Image/Mamtismamas.png" className="w-14 h-14	" />
          <h1 className="">Hello, Admin</h1>
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder="search"
            className=" w-1/4	p-0.5  rounded		 "
          />
          {/* <TbLayoutDashboard/> */}
        </div>
        <div className="  flex w-1/4 justify-evenly items-center ">
          <img src="./Image/bell-ring.png" className="h-5		" />
          <div className="flex space-x-2 ">
            <div className="relative w-12 h-12">
              <img
                className="rounded-full  shadow-sm"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
              />
            </div>
            <p className="flex flex-col  font-bold	">
              Jonathan
              <span className="font-normal	">Admin</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="bg-red-50 flex ">
        <Sidebar />
        <div className="w-screen 	bg-red-50 h-full flex flex-col gap-2.5  ">
          <div className=" w-full flex justify-around h-44		 pt-5  ">
            <div className="w-1/5	 rounded-md	 h-full	bg-white	flex items-center	justify-center	 flex-col border-b-4 border-b-yellow-400	 ">
            <h1 className="flex gap-2.5 w-full justify-center items-center "> <FiUsers/>Total Users</h1>
              <p>35000</p>
            </div>
            <div className="w-1/5	  rounded-md	h-full	bg-white	flex items-center	justify-center flex-col border-b-4 border-b-red-600		">
              
              <h1 className="flex gap-2.5 w-full justify-center items-center "> <FiUsers/> Total Chefs</h1>
              <p>35000</p>
            </div>
            <div className="w-1/5	  rounded-md	h-full	bg-white	flex items-center	justify-center flex-col	border-b-4 border-b-blue-500">
            <h1 className="flex gap-2.5 w-full justify-center items-center "> <FiUsers/>Total Customers</h1>
              <p>35000</p>
            </div>
            <div className="w-1/5	 rounded-md	h-full	bg-white	flex flex-col items-center	justify-center	border-b-4 border-b-green-800">
            <h1 className="flex gap-2.5 w-full justify-center items-center "> <FiUsers/>Total Revenue</h1>
              <p>35000</p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-right	p-2	w-min	 ml-20 self-end border border-black rounded-tl-md	rounded-bl-md font-bold "
          >
            {isOpen ? "<" : "x"}
            {/* &#10005; */}
          </button>
          <div className="flex p-7 justify-between gap-5  h-1/2 pt-0 ease-in duration-300 ">
            <div className="w-full">
              <h1>Users</h1>
              {data?.items?.map((item) => (
                <div className=" flex justify-around items-center bg-white h-16 mb-2 shadow-lg shadow-gray-300">
                  <p>{item.content}</p>
                  <p>{item.id}</p>
                  {/* <p>{item.icon}</p> */}
                  {/* <{icon}/> */}
                </div>
              ))}
            </div>
            {isOpen ? <h1>Analysis</h1> : ""}
            <div
              className={`flex flex-col gap-10 ease-in duration-300  ${
                isOpen ? "hidden" : ""
              }`}
            >
              <div className="	shadow-gray-300 shadow-lg">
                {data?.items?.map((item) => (
                  <div className=" flex justify-around items-center bg-white h-16	p-14	">
                    <p>{item.content}</p>
                    <p>{item.id}</p>
                    <p>{item.icon}</p>
                  </div>
                ))}
              </div>
              <div className="shadow-gray-300 shadow-lg">
                {data?.items?.map((item) => (
                  <div className=" flex justify-around items-center bg-white h-16	p-14	">
                    <p>{item.content}</p>
                    <p>{item.id}</p>
                    <p>{item.icon}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
