import { useEffect, useState } from "react";
import './index.css'

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
    {data.map(item => (
        <li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {/* Display other properties of the data item */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MyComponent;