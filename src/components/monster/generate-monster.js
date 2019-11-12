import React from "react";

export const GenerateMonster = (monsterDataList) => {
  return monsterDataList.map((item, i) => (
    // <div
    //   key={item.Id}
    //   style={{
    //     width: "50px",
    //     height: "50px",
    //     backgroundColor: "yellow",
    //     position: "absolute",
    //     left: item.monstercordinateY,
    //     top: item.monstercordinateX
    //   }}
    // >
    // </div>
    <img
      src={require("../../img/monster.png")}
      key={item.Id}
      style={{
        width: "50px",
        height: "50px",
        position: "absolute",
        left: item.monstercordinateY,
        top: item.monstercordinateX
      }}
    />
  ));
};
