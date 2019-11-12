export const checkWallLocation = (direction, objLocation) => {
  let wallMap = loadWallRoute(objLocation);
  let result = false;
  let newcordinateY = objLocation.cordinateY;
  let newcordinateX = objLocation.cordinateX;
  switch (direction) {
    case "ArrowRight":
      if (
        newcordinateX > wallMap.ArrowRight.fisrtCordinateX &&
        newcordinateX < wallMap.ArrowRight.secondCordinateX &&
        newcordinateY > wallMap.ArrowRight.fisrtCordinateY &&
        newcordinateY < wallMap.ArrowRight.secondCordinateY
      )
        result = false;
      else result = true;
      break;
    case "ArrowLeft":
      if (
        newcordinateX > wallMap.ArrowLeft.fisrtCordinateX &&
        newcordinateX < wallMap.ArrowLeft.secondCordinateX &&
        newcordinateY > wallMap.ArrowLeft.fisrtCordinateY &&
        newcordinateY < wallMap.ArrowLeft.secondCordinateY
      )
        result = false;
      else result = true;
      break;
    case "ArrowDown":
      if (
        newcordinateY > wallMap.ArrowDown.fisrtCordinateY &&
        newcordinateY < wallMap.ArrowDown.secondCordinateY &&
        newcordinateX > wallMap.ArrowDown.fisrtCordinateX &&
        newcordinateX < wallMap.ArrowDown.secondCordinateX
      )
        result = false;
      else result = true;
      break;
    case "ArrowUp":
      if (
        newcordinateY > wallMap.ArrowUp.fisrtCordinateY &&
        newcordinateY < wallMap.ArrowUp.secondCordinateY &&
        newcordinateX > wallMap.ArrowUp.fisrtCordinateX &&
        newcordinateX < wallMap.ArrowUp.secondCordinateX
      )
        result = false;
      else result = true;
      break;
  }

  return result;
};

const loadWallRoute = (objLocation) => {
  let wallMap = require("../../routes/wall-route.json").Wall_1;

  if (objLocation.cordinateY < 180) {
    wallMap = require("../../routes/wall-route.json").Wall_1;
  }
  if (objLocation.cordinateY > 180 && objLocation.cordinateX < 300) {
    wallMap = require("../../routes/wall-route.json").Wall_2;
  }
  if (objLocation.cordinateY > 180 && objLocation.cordinateX > 300) {
    wallMap = require("../../routes/wall-route.json").Wall_3;
  }
  if (objLocation.cordinateY > 400) {
    wallMap = require("../../routes/wall-route.json").Wall_4;
  }

  if (objLocation.cordinateY > 600 && objLocation.cordinateX < 300) {
    wallMap = require("../../routes/wall-route.json").Wall_5;
  }
  if (objLocation.cordinateY > 600 && objLocation.cordinateX > 300) {
    wallMap = require("../../routes/wall-route.json").Wall_6;
  }

  return wallMap;
};
