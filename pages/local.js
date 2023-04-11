import { useState, useEffect } from "react";

function Sidebar() {
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

  return (
    <div className="border border-solid	border-black flex	justify-around">
      <div className="w-2/4">
        {data?.items?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="w-2/4">
        {data?.items?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
