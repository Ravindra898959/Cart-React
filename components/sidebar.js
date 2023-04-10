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
          <li>
            <Link href="#">
              Dashboard
              {/* <a>Home</a> */}
            </Link>
          </li>
          <li>
            <Link href="#">
              Users
              {/* <a>About</a> */}
            </Link>
          </li>
          <li>
            <Link href="#">
              Revenue
              {/* <a>Contact</a> */}
            </Link>
          </li>
          <li>
            <Link href="#">
              Security
              {/* <a>Contact</a> */}
            </Link>
          </li>
        </ul>
        <style jsx>{`
          .sidebar {
            position: fixed;
            top: 0;
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

          li {
            margin-bottom: 10px;
          }
          a {
            color: black;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
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

          header a {
            font-weight: bold;
          }

          header input {
            margin-left: 20px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            box-shadow: 0 0 2px gray;
          }

          .profile {
            display: flex;
            align-items: center;
          }

          .profile img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 20px;
          }

          .profile span {
            margin-left: 10px;
            font-weight: bold;
          }

          .close-button {
            float: right;
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
