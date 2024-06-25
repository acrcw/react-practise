import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
function UserData() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    // fetch("/users", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setRows(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (err.message == "UnAuthorized") {
    //       navigate("/login");
    //     }
    //   });
    axios.get("/users", { withCredentials: true }).then((response)=> setRows(response.data.data)).catch((err)=>{
      if(err?.response?.data?.message == "UnAuthorized")
      {
        navigate("/login");
      }
    })
  }, []);
  const headings = [
    {
      name: "userId",
    },

    {
      name: "username",
    },
    {
      name: "email",
    },
    {
      name: "password",
    },
    {
      name: "CreatedAt",
    },
    {
      name: "LoggedIn",
    },
  ];

  return (
    <>

      <Table headings={headings} table_Rows={rows} />
    </>
  );
}

export default UserData;
