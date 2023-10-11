import React, { useState, useEffect } from "react";
import { USERAPI } from "../../constants";
import { Row } from "../row";

export function GetApi() {
  const [userApi, setUserApi] = useState([]);

  useEffect(() => {
    fetch(USERAPI)
      .then((res) => res.json())
      .then((res) => setUserApi(res));
  }, []);

  const onDelete = (arg) => {
    return () => {
      setUserApi((prev) => {
        return prev.filter((item) => item.id !== arg);
      });
    };
  };

  const editRow = (arg) => {
    return () => {
      console.log(arg);
    };
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>street</th>
            <th>suite</th>
            <th>company name</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {userApi.map((item) => (
            <Row
              editRow={editRow}
              onDelete={onDelete}
              arg={{ ...item }}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
