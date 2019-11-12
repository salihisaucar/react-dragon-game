import { checkWallLocation } from "../wall-engine/wallEngine.js";

export const CreateFire = (fireList, directionObj) => {
  var uniqid = require("uniqid");
  var arr = [];

  for (var i = 0; i < 1; i++) {
    arr.push({
      Id: uniqid(),
      firecordinateX: directionObj.positionX,
      firecordinateY: directionObj.positionY,
      direction: directionObj.direction
    });
  }
  arr = arr.concat(fireList);
  return arr;
};

export const FireDirection = (fireList) => {
  var arr = [];
  var len = fireList.length;
  var objFire;
  for (var i = 0; i < len; i++) {
    objFire = {
      cordinateX: fireList[i].firecordinateX,
      cordinateY: fireList[i].firecordinateY
    };
    switch (fireList[i].direction) {
      case "East":
        if (checkWallLocation("ArrowRight", objFire))
          if (calculateFireDistance("East", fireList[i].firecordinateY)) {
            arr.push({
              Id: fireList[i].Id,
              firecordinateY: fireList[i].firecordinateY + 30,
              firecordinateX: fireList[i].firecordinateX,
              direction: fireList[i].direction
            });
          }
        break;
      case "West":
        if (checkWallLocation("ArrowLeft", objFire)) {
          if (calculateFireDistance("West", fireList[i].firecordinateY)) {
            arr.push({
              Id: fireList[i].Id,
              firecordinateY: fireList[i].firecordinateY - 30,
              firecordinateX: fireList[i].firecordinateX,
              direction: fireList[i].direction
            });
          }
        }
        break;
      case "North":
        if (checkWallLocation("ArrowUp", objFire)) {
          if (calculateFireDistance("North", fireList[i].firecordinateX)) {
            arr.push({
              Id: fireList[i].Id,
              firecordinateX: fireList[i].firecordinateX + 30,
              firecordinateY: fireList[i].firecordinateY,
              direction: fireList[i].direction
            });
          }
        }
        break;
      case "South":
        if (checkWallLocation("ArrowDown", objFire)) {
          if (calculateFireDistance("South", fireList[i].firecordinateX)) {
            arr.push({
              Id: fireList[i].Id,
              firecordinateX: fireList[i].firecordinateX - 30,
              firecordinateY: fireList[i].firecordinateY,
              direction: fireList[i].direction
            });
          }
        }
        break;
    }
  }
  return arr;
};

const calculateFireDistance = (direction, currentLocation) => {
  let result = false;
  switch (direction) {
    case "East":
      if (currentLocation < 800) result = true;
      break;
    case "West":
      if (currentLocation > 30) result = true;
      break;
    case "South":
      if (currentLocation > 10) result = true;
      break;
    case "North":
      if (currentLocation < 600) result = true;
      break;
  }
  return result;
};
