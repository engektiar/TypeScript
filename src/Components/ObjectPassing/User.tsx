import React from "react";
type UserObject = {
  sender: {
    id: number;
    name: string;
    adderss: string;
    dep: string;
    age: number;
  }[];
};

export default function User({ sender }: UserObject) {
  return (
    <div>
      {sender.map((item) => {
        return (
          <div>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h3>{item.adderss}</h3>
            <h4>{item.dep}</h4>
            <h5>{item.age}</h5>
          </div>
        );
      })}
    </div>
  );
}
