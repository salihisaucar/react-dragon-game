export const monsterStatusCheck = (data) => {
  var result = data;
  var cordinateX = 0;
  var cordinateY = 0;

  for (var i = 0; i < data.fireList.length; i++) {
    var fireLocationX = data.fireList[i].firecordinateX;
    var fireLocationY = data.fireList[i].firecordinateY;

    for (var j = 0; j < data.monsterList.length; j++) {
      cordinateX = fireLocationX - data.monsterList[j].monstercordinateX;
      cordinateY = fireLocationY - data.monsterList[j].monstercordinateY;

      if (
        cordinateX > -25 &&
        cordinateX < 25 &&
        cordinateY > -25 &&
        cordinateY < 25
      ) {
        result.monsterList = killMonster(
          data.monsterList[j].Id,
          data.monsterList
        );

        result.score = increaseScore(data.score);

        result.fireList = deleteFire(data.fireList[i].Id, data.fireList);
        break;
      }
    }
  }

  return result;
};

const killMonster = (monsterId, monsterList) => {
  var arr = [];
  for (var i = 0; i < monsterList.length; i++) {
    if (monsterList[i].Id != monsterId) {
      arr.push({
        Id: monsterList[i].Id,
        monstercordinateX: monsterList[i].monstercordinateX,
        monstercordinateY: monsterList[i].monstercordinateY,
        monsterRouteId: monsterList[i].monsterRouteId,
        routeIndex: monsterList[i].routeIndex
      });
    }
  }
  return arr;
};

const deleteFire = (fireId, fireList) => {
  var arr = [];

  for (var index = 0; index < fireList.length; index++) {
    if (fireList[index].Id != fireId) {
      arr.push({
        Id: fireList[index].Id,
        firecordinateX: fireList[index].firecordinateX,
        firecordinateY: fireList[index].firecordinateY,
        direction: fireList[index].direction
      });
    }
  }

  return arr;
};

const increaseScore = (score) => {
  var newScore = 10;

  newScore = newScore + score;

  return newScore;
};

export const createMonsterSateList = () => {
  var arr = [
    {
      Id: 1,
      monstercordinateX: 20,
      monstercordinateY: 30,
      monsterRouteId: 1,
      routeIndex: 0
    },
    {
      Id: 2,
      monstercordinateX: 50,
      monstercordinateY: 200,
      monsterRouteId: 2,
      routeIndex: 0
    },
    {
      Id: 3,
      monstercordinateX: 20,
      monstercordinateY: 30,
      monsterRouteId: 3,
      routeIndex: 0
    },
    {
      Id: 4,
      monstercordinateX: 20,
      monstercordinateY: 30,
      monsterRouteId: 4,
      routeIndex: 0
    },
    {
      Id: 5,
      monstercordinateX: 20,
      monstercordinateY: 30,
      monsterRouteId: 5,
      routeIndex: 0
    },
    {
      Id: 6,
      monstercordinateX: 20,
      monstercordinateY: 30,
      monsterRouteId: 6,
      routeIndex: 0
    }
  ];

  return arr;
};

export const playerStatusCheck = (player, monsterList) => {
  var result = false;
  var cordinateX = 0;
  var cordinateY = 0;

  for (var i = 0; i < monsterList.length; i++) {
    var monsterLocationX = monsterList[i].monstercordinateX;
    var monsterLocationY = monsterList[i].monstercordinateY;

    cordinateX = monsterLocationX - player.cordinateX;
    cordinateY = monsterLocationY - player.cordinateY;

    if (
      cordinateX > -50 &&
      cordinateX < 50 &&
      cordinateY > -50 &&
      cordinateY < 50
    ) {
      result = true;
      break;
    }
  }

  return result;
};
