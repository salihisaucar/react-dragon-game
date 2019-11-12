This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Hi everyone, I just wanted to give some information about what I have done on this project. Firstly, this is just a simple game that is browser-based. I just wanted to prove how much React  is compatible with redux. Probably, you have seen a lot of react applications that were  written for the form-based app.  Now, You will be scrutinizing how reactjs act under too many change requests.  Let's talk about the structure of this project :)

The project consists of 6 main parts.

1-Player(It explicitly your character)

2-)Fire (your character produces it)

3-)Monster(it is a nightmare of  your character :))

4-)Game screen

5-)Information panel (Your information that while playing )

6-)Wall

Let's talk about the structure of Player.

The player module has two important duty which are to move and to fire. We are going to see that fire will branch in the future. But basically we have to tackle what the player does during the game.

When you press the button to move player module will get where you want to go. Actually this is imperative for us because when you encounter the monster, you want to fire. At this point, how can fire decide where it will go :) it is easy because 'setPlayerPosition' method will help you. another duty of the player is to stimulate, to trigger the redux Because everything in this game is being governed by redux.

This part is the most important part that we can make something done the redux

const mapDispachToProps = (dispach) => {
  
  return {
  
    onRun: (direction) => dispach({ type: "RUN", value: direction }),
    
    onFire: (directionObj) => dispach({ type: "FIRE", value: directionObj })
  
  };
  
};

The fire module which is a little confounding has basically one paramount duty which is to destroy the monster :)

Let's explain how it will do it.

Do you remember that I have mentioned how the fire would trigger? Yes, you are right:)  It would be triggered by the player module. When the player fire redux would get this information from the player module. as soon as redux get this information from the player module, It will produce a new fire object by using the position of the player object.

if (action.type === "FIRE")-- it is the point that is triggered to produce the fire at reducer.js

Do you think that everything is done :) of course no :) we have to make it moved but how?

if (action.type === "FIRE_DIRECTION") --it is nested case in reducer to catch the fire requests. I assume that you know how redux works because of this I don't want to weary you about redux work structure but it is obligatory to comprehend how you could make fire moved.

I have nested a timer function in the fire.js Because I want to trigger something regularly. When I call some function that would change my state, Otomaticly, my fire object would be changed by react virtual dom. This is what I did :)

 componentDidMount() {

    this.interval = setInterval(this.props.onFireDirection, 100);

  }
  componentWillUnmount() {

    clearInterval(this.interval);-- this part is used to remove the fire 
    object because it will never live forever :)

  }

Everything is done now we have a player that can fire when he faces the monster but something is wrong. Yeah, we haven't created a monster yet.

Let's look at how we can create the monster. There is a folder under the components. Monster ;) It has 2 js file which is very simple. I am not going to mention what those files have. I am going to talk about how we can track the monster at reducer.js

  if (state.monsterList.length === 0) {

    state = {

      ...state,

      monsterList: createMonsterSateList()

    };
  }

This code block means how we create the monster list. Also, I want to discuss about 'generalEngine.is'.
It is a kind of heart for our game. The most important incidents are being managed by this module.

import {

  createMonsterSateList,

  playerStatusCheck,

  monsterStatusCheck

} from "../../engine/general-engine/generalEngine.js";







