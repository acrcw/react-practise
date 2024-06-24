import React, { useEffect } from "react";
import Table from "./Table";

function UserData() {
    useEffect(()=>{
        fetch("http://localhost:5000/").then((data)=>{
            console.log(data)
        })
    },[])
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
  const data = [
    {
      userId: "35e4df57-d996-4064-bf86-22c5047d3da2",
      username: "",
      email: "jobanpreet@cloud2eq.com",
      password: "$2b$10$Zah/eKEuKITmpTNFBaP/D.xZGJntPmq2nbGZ1D6LzY4s1mtCcJa.a",
      createdAt: "2024-06-24T06:40:13.000Z",
      lastLoggedIn: "2024-06-24T06:40:13.000Z",
    },
    {
      userId: "2acdadc0-6c82-4b74-8b42-4a3c5126fc38",
      username: "joban",
      email: "jobanpreet@cloudeq.com",
      password: "$2b$10$VQ0bv144isP21B.9yBX3NO78PGX6KSwB55v1jCKyFPW6cLO9UjZEC",
      createdAt: "2024-06-24T06:34:53.000Z",
      lastLoggedIn: "2024-06-24T08:14:29.000Z",
    },
  ];

  return (
    <>
     
      <Table headings={headings} table_Rows={data}/>
    </>
  );
}

export default UserData;
