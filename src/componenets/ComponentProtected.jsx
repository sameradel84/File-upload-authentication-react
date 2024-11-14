import React, { useEffect, useState } from "react";
import axios from "axios";

const ComponentProtected = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(`error fetching data : ${err.message}`);
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>protected data</h2>
      {/* <p>{data}</p> */}
      {data ? <pre> {JSON.stringify(data, null, 2)}</pre> : <p>loading....</p>}
    </div>
  );
};

export default ComponentProtected;
