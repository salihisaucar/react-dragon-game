import { checkWallLocation } from "../wall-engine/wallEngine.js";
export const playerDirection = (direction, playerVal) => {
  let player = playerVal;
  switch (direction) {
    case "ArrowRight":
      if (checkWallLocation(direction, playerVal)) {
        player.cordinateY = player.cordinateY + 20;
      } else player.cordinateY = player.cordinateY;

      break;
    case "ArrowLeft":
      if (checkWallLocation(direction, playerVal)) {
        player.cordinateY = player.cordinateY - 20;
      } else player.cordinateY = player.cordinateY;

      break;
    case "ArrowDown":
      if (checkWallLocation(direction, playerVal)) {
        player.cordinateX = player.cordinateX + 20;
      } else player.cordinateX = player.cordinateX;
      break;
    case "ArrowUp":
      if (checkWallLocation(direction, playerVal)) {
        player.cordinateX = player.cordinateX - 20;
      } else player.cordinateX = player.cordinateX;
      break;
  }

  return player;
};
