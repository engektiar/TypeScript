import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

type User = {
  id: number,
  name: string,
};
const UseStarteMain = () => {
  const [user, setuser] = (useState | null)(User | null);

  const handeluser = () => {
    setuser({ id: 1, name: "Ektiar " });
    console.log(user);
  };
  return (
    <div>
      <h1>Add user </h1>
      <button onClick={handeluser}>Add user </button>
      <p>{user?.name}</p>
    </div>
  );
};

export default UseStarteMain;
