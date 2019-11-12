import { playerDirection } from "../../engine/player-engine/playerEngine.js";
import { MonsterDirection } from "../../engine/monster-engine/monsterEngine.js";
import {
  CreateFire,
  FireDirection
} from "../../engine/fire-engine/fireEngine.js";
import {
  createMonsterSateList,
  playerStatusCheck,
  monsterStatusCheck
} from "../../engine/general-engine/generalEngine.js";

const initialState = {
  score: 0,
  credit: 3,
  shotCount: 50,
  player: {
    cordinateX: 550,
    cordinateY: 600
  },
  monsterList: [],
  fireList: []
};

const reducer = (state = initialState, action) => {
  if (state.monsterList.length === 0) {
    state = {
      ...state,
      monsterList: createMonsterSateList()
    };
  }

  if (playerStatusCheck(state.player, state.monsterList) && state.credit > 0) {
    state = {
      ...state,
      player: {
        cordinateX: 550,
        cordinateY: 600
      },
      credit: state.credit - 1,
      monsterList: []
    };
  }

  if (action.type === "RUN") {
    const { cordinateX, cordinateY } = playerDirection(
      action.value,
      state.player
    );

    state = {
      ...state,
      player: {
        cordinateX: cordinateX,
        cordinateY: cordinateY
      }
    };
  }

  if (action.type === "MOVE") {
    var monsterList = MonsterDirection(state.monsterList);
    state = {
      ...state,
      monsterList: monsterList
    };
  }

  if (action.type === "FIRE") {
    if (state.shotCount > 0) {
      const fireList = CreateFire(state.fireList, action.value);
      state = {
        ...state,
        fireList: fireList,
        shotCount: state.shotCount - 1
      };
    } else {
      state = {
        ...state,
        player: {
          cordinateX: 550,
          cordinateY: 600
        },
        shotCount: 50,
        credit: state.credit - 1
      };
    }
  }

  if (action.type === "FIRE_DIRECTION") {
    if (state.fireList.length > 0) {
      const fireList = FireDirection(state.fireList);
      state = {
        ...state,
        fireList: fireList
      };
    }
  }

  if (state.fireList.length > 0) {
    var newState = monsterStatusCheck(state);
    state = {
      ...state,
      monsterList: newState.monsterList,
      fireList: newState.fireList,
      score: newState.score
    };
  }

  return state;
};

export default reducer;
