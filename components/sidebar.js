import Link from "next/link";
import { useState, useEffect } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import {HiOutlineCurrencyDollar} from "react-icons/hi" ;
import {MdLockOutline} from "react-icons/md"; 


const Sidebar = () => {
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
  // console.log(data);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className=" flex flex-col gap-12 pt-5 w-20 items-center bg-white ">
      <button
        className="toggle-button text-2xl"
        onClick={toggleSidebar}
      >
        ☰
        </button>
      <TbLayoutDashboard className="text-2xl" />
      <FiUsers className="text-2xl"/>
      <HiOutlineCurrencyDollar className="text-2xl"/>
      <MdLockOutline className="text-2xl"/>
        
</div>
      <div className={`sidebar  ${isOpen ? "open" : ""}`}>
        <header>
          <button className="close-button" onClick={toggleSidebar}>
            &#10005;
          </button>
        </header>
        <ul className="m-0 p-0 list-none	">
          {data?.items?.slice(0,4).map((item) => (
            // <Icon />
            <li className="m-2.5 flex gap-3 mb-10" key={item.id}>
              <MdLockOutline className="text-2xl"/>
              <Link href="#" className="font-bold">{item.title}</Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .sidebar {
            padding-top: 5%;
            position: fixed;
            top: 0;
            left: -20%;
            height: 100%;
            width: 20%;
            background-color: #ffffff;
            // padding: 20px;
            transition: left 0.3s ease-in-out;
          }

          .sidebar.open {
            padding-top: 5%;
            left: 0;
          }
          .toggle-button {
            display: none;
          }
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          header input {
            margin-left: 20px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            box-shadow: 0 0 2px gray;
          }
          .close-button {
            background-color: #ffffff;
            border: none;
            font-size: 16px;
            cursor: pointer;
            margin-left: 90%;  
          }

          @media (max-width: 768px) {
            .sidebar {
              left: -200px;
            }

            .sidebar.open {
              left: 0;
            }

            .toggle-button {
              display: block;
              position: fixed;
              top: 10px;
              left: 10px;
              font-size: 24px;
              cursor: pointer;
            }

            main {
              padding-left: 50px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Sidebar;
