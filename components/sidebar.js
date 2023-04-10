import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button pl-4 text-2xl	" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>
          <button className="close-button" onClick={toggleSidebar}>
            &#10005;
          </button>
        </header>
        <ul className="m-0 p-0 list-none	">
          <li className="m-2.5	">
            <Link href="#">Dashboard</Link>
          </li>
          <li className="m-2.5 text-black		">
            <Link href="#">Users</Link>
          </li>
          <li className="m-2.5	">
            <Link href="#">Revenue</Link>
          </li>
          <li className="m-2.5	">
            <Link href="#">Security</Link>
          </li>
        </ul>
        <style jsx>{`
          .sidebar {
            position: fixed;
            top: 9.5%;
            left: -200px;
            height: 100%;
            width: 200px;
            background-color: #ffffff;
            padding: 20px;
            transition: left 0.3s ease-in-out;
          }

          .sidebar.open {
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
