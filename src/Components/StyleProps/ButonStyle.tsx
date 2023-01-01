import React, { CSSProperties } from "react";
type styelButton = {
  btnstle: CSSProperties;
};
export const ButonStyle = (props: styelButton) => {
  return <div style={props.btnstle}>ButonStyle</div>;
};
