import { useEffect, useState } from "react";

export const CustomerList = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await resp.json();
    setList(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
