import React from "react";
// import Layout from "../../components/Layout";
import Sidebar from "../components/sidebar";

const Admin = () => {
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
            className=" w-1/4	p-0.5 border border-solid	border-inherit rounded		 "
          />
        </div>
        <div className="  flex w-1/4 justify-evenly items-center ">
          <img src="./Image/bell-ring.png" className="h-5		" />
          <div class="flex space-x-2 ">
            <div className="relative w-12 h-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
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
      <div className="bg-red-50">
        <Sidebar />
        <div className="w-3/4		ml-52 	bg-red-50 h-screen flex justify-between					">
          <div className="w-1/5	border border-solid	border-inherit rounded-md	 h-1/5	bg-white	flex items-center	justify-center	 flex-col border-b-4 border-b-yellow-400	 ">
            <h1>Total Users</h1>
            <p>35000</p>
          </div>
          <div className="w-1/5	border border-solid	border-inherit  rounded-md	h-1/5	bg-white	flex items-center	justify-center flex-col border-b-4 border-b-red-600		">
            <h1>Total Chefs</h1>
            <p>35000</p>
          </div>
          <div className="w-1/5	border border-solid	border-inherit  rounded-md	h-1/5	bg-white	flex items-center	justify-center flex-col	border-b-4 border-b-blue-500">
            <h1>Total Customers</h1>
            <p>35000</p>
          </div>
          <div className="w-1/5	border border-solid	border-inherit rounded-md	h-1/5	bg-white	flex flex-col items-center	justify-center	border-b-4 border-b-green-800">
            <h1>Total Revenue</h1>
            <p>35000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
