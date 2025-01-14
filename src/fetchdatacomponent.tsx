import { useEffect, useState } from "react";

function FetchData() {
  //state for fetch data , laoding and error

  const [data, setData] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [laoding, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // Store fetched data in state
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Capture any errors
        setLoading(false); // Set loading to false
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount
  //simple way
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []); // Empty array ensures this runs only once (on mount)

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );

  // //second way try catch

  // const [result, setResult] = useState([]);

  // useEffect(() => {
  //   const fetchDataVar = async () => {
  //     try {
  //       const fetchData = await fetch("");
  //       setResult(fetchData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // });
}

export default FetchData;

// using fetch APi method
