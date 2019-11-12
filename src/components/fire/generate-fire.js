import React from "react";

export const GenerateFire = (fireDataList) => {
  return fireDataList.map((item, i) => (
    <img
      key={item.Id}
      src={require("../../img/fire.png")}
      style={{
        width: "30px",
        height: "30px",
        position: "absolute",
        left: item.firecordinateY,
        top: item.firecordinateX
      }}
    />
  ));
};
