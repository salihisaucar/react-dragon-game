export const MonsterDirection = (monsterList) => {
  const len = monsterList.length;
  var arr = [];

  for (var i = 0; i < len; i++) {
    arr.push(
      setMonsterLocation(
        monsterList[i].monsterRouteId,
        monsterList[i].routeIndex
      )
    );
  }
  return arr;
};

const setMonsterLocation = (monsterRouteId, routeIndex) => {
  let monsterItemObj = {
    Id: 0,
    monstercordinateX: 0,
    monstercordinateY: 0,
    monsterRouteId: 0,
    routeIndex: 0
  };

  let monsterRoute;

  switch (monsterRouteId) {
    case 1:
      monsterRoute = require("../../routes/route-1.json");
      break;
    case 2:
      monsterRoute = require("../../routes/route-2.json");
      break;
    case 3:
      monsterRoute = require("../../routes/route-3.json");
      break;
    case 4:
      monsterRoute = require("../../routes/route-4.json");
      break;
    case 5:
      monsterRoute = require("../../routes/route-5.json");
      break;
    case 6:
      monsterRoute = require("../../routes/route-6.json");
      break;
  }

  let counter = routeIndex;
  var arr = [];
  var len = monsterRoute.length;

  if (monsterRoute.length <= counter) {
    counter = 0;
  }

  for (var i = counter; i < len; i++) {
    monsterItemObj = {
      Id: monsterRouteId,
      monstercordinateX: monsterRoute[i].cordinateX,
      monstercordinateY: monsterRoute[i].cordinateY,
      monsterRouteId: monsterRouteId,
      routeIndex: counter + 1
    };
    break;
  }

  return monsterItemObj;
};
