import React from "react";
type DataFachngProps = {
  states: string;
};
const UserDefine = ({ states }: DataFachngProps) => {
  if (states === "loading") {
    return <h2>Data is Loading ..</h2>;
  } else if (states === "error") {
    return <h2>Loding is Eorror</h2>;
  }
  return (
    <div>
      <h2>data faching down </h2>
    </div>
  );
};

export default UserDefine;
