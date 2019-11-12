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





