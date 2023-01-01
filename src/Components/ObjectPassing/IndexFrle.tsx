import React from "react";
import User from "./User";
const data = [
  {
    id: 1,
    name: "MD Ektiar Hossen",
    adderss: "dhaka Bangladesh",
    dep: "cse",
    age: 23,
  },
  {
    id: 2,
    name: "MD Ektiar Hossen",
    adderss: "dhaka Bangladesh",
    dep: "cse",
    age: 23,
  },
];
export default function IndexFrle() {
  return (
    <div>
      <User sender={data} />
    </div>
  );
}
